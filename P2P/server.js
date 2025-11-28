// server.js
// Multi-socket signalling + relay server for P2P chat.
// - Allows multiple sockets per user (useful when same user opens multiple tabs).
// - Forwards 'signal' payloads to all sockets of the target user.
// - Forwards 'relay_message' to all sockets of the target user.
// - Persists chat history to chats.json and returns history on register.
// - Provides a debug endpoint /__debug_users to inspect the users map.

const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');
const fs = require('fs');

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*", methods: ["GET","POST"] } });

const PORT = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public', 'index.html')));

// users map: userId -> { userId, name, domain, sockets: Set(socketId) }
const users = new Map();

// debug endpoint to inspect current users (safe for local dev)
app.get('/__debug_users', (req, res) => {
  const dump = {};
  for (const [id, info] of users.entries()) {
    dump[id] = {
      userId: info.userId,
      name: info.name,
      domain: info.domain,
      sockets: Array.from(info.sockets || [])
    };
  }
  res.json(dump);
});

// ------------------ Simple file-backed chat store ------------------
const CHATS_FILE = path.join(__dirname, 'chats.json');

// simple in-memory cache of persisted chats; structure:
// { [userId]: { conversations: { [otherId]: [ { from, text, ts, relayed } ] } } }
let chats = {};

// load file if exists
try {
  if (fs.existsSync(CHATS_FILE)) {
    const raw = fs.readFileSync(CHATS_FILE, 'utf8') || '{}';
    chats = JSON.parse(raw) || {};
    console.log('[server] loaded chats from', CHATS_FILE);
  }
} catch (e) {
  console.warn('[server] failed to load chats file', e);
  chats = {};
}

let saveTimer = null;
function scheduleSaveChats() {
  if (saveTimer) clearTimeout(saveTimer);
  saveTimer = setTimeout(() => {
    try {
      fs.writeFileSync(CHATS_FILE, JSON.stringify(chats, null, 2), 'utf8');
      console.log('[server] chats persisted to', CHATS_FILE);
    } catch (e) {
      console.error('[server] failed to persist chats', e);
    }
    saveTimer = null;
  }, 250); // debounce writes
}

function ensureChatOwner(userId) {
  if (!chats[userId]) chats[userId] = { conversations: {} };
  return chats[userId];
}

function persistMessageForUser(ownerUserId, otherId, msg) {
  const owner = ensureChatOwner(ownerUserId);
  if (!owner.conversations[otherId]) owner.conversations[otherId] = [];
  owner.conversations[otherId].push(msg);
  // optional: keep last N messages
  if (owner.conversations[otherId].length > 2000) {
    owner.conversations[otherId].splice(0, owner.conversations[otherId].length - 2000);
  }
  scheduleSaveChats();
}
// -------------------------------------------------------------------

function normalizeDomain(d){
  if (!d) return '';
  const s = String(d).trim().toLowerCase();
  if (s === 'cloud_computing' || s === 'cloud computing' || s === 'cloud-computing') return 'cloud_computing';
  if (s === 'data_analytics' || s === 'data analytics' || s === 'data-analytics') return 'data_analytics';
  return s;
}

function computeSimilarForUser(userId){
  const me = users.get(userId); if (!me) return [];
  const myDomain = me.domain || '';
  if (!myDomain) return [];
  const out = [];
  for (const [otherId, info] of users.entries()){
    if (!info || otherId === userId) continue;
    if ((info.domain || '') === myDomain) {
      out.push({ user_id: otherId, name: info.name, domain: info.domain });
    }
  }
  out.sort((a,b) => String(a.name||'').localeCompare(b.name||''));
  return out;
}

io.on('connection', (socket) => {
  console.log('[server] socket connected', socket.id);

  socket.on('register', ({ user_id, name, domain } = {}) => {
    try {
      if (!name) { socket.emit('error', { message: 'name required' }); return; }
      const normalized = normalizeDomain(domain);
      let finalId = (user_id && String(user_id).trim()) || null;
      if (!finalId) {
        try { finalId = require('crypto').randomUUID(); } catch(e) { finalId = 'u-' + Date.now() + '-' + Math.random().toString(36).slice(2,8); }
      }

      // ensure entry exists
      let entry = users.get(finalId);
      if (!entry) {
        entry = { userId: finalId, name, domain: normalized, sockets: new Set() };
      }
      entry.name = name;
      entry.domain = normalized;
      entry.sockets.add(socket.id);
      users.set(finalId, entry);

      // attach metadata to socket for cleanup
      socket.userId = finalId;
      socket.username = name;

      socket.emit('registered', { user_id: finalId, name });

      // send similar peers to this socket
      io.to(socket.id).emit('similar_peers', computeSimilarForUser(finalId));

      // send persisted chat history for this user (object: { otherId: [msgs] })
      try {
        const myChats = chats[finalId] && chats[finalId].conversations ? chats[finalId].conversations : {};
        io.to(socket.id).emit('chat_history', myChats);
      } catch (e) { console.warn('[server] failed to send chat_history', e); }

      // notify other users (iterate every user's sockets)
      for (const [otherId, info] of users.entries()) {
        if (otherId === finalId) continue;
        if (info && info.sockets) {
          for (const sId of info.sockets) {
            io.to(sId).emit('similar_peers', computeSimilarForUser(otherId));
          }
        }
      }

      console.log(`[server] registered ${finalId} (${name}) on socket ${socket.id} domain=${normalized}`);
    } catch (err) {
      console.error('[server] register error', err);
      socket.emit('error', { message: err.message });
    }
  });

  // Client requests to store a message (persist for both participants)
  socket.on('store_message', ({ owner_user_id, other_user_id, from, text, relayed = false, ts = Date.now() } = {}) => {
    if (!owner_user_id || !other_user_id || typeof text === 'undefined') return;
    const msg = { from, text, ts, relayed: !!relayed };
    try {
      persistMessageForUser(owner_user_id, other_user_id, msg);
      // also persist to the other_user's copy so both get quick restore
      persistMessageForUser(other_user_id, owner_user_id, msg);
      // ack back to sender
      io.to(socket.id).emit('store_ack', { owner_user_id, other_user_id, ts });
    } catch (e) {
      console.error('[server] store_message error', e);
    }
  });

  // Forward signalling to all sockets for the target user
  socket.on('signal', ({ to_user_id, from_user_id, signal } = {}) => {
    console.log('[server] received signal', { from_user_id, to_user_id, hasSignal: !!signal });
    if (!to_user_id) {
      console.warn('[server] signal missing to_user_id', { from_user_id });
      return;
    }
    const target = users.get(to_user_id);
    if (target && target.sockets && target.sockets.size) {
      for (const sockId of target.sockets) {
        io.to(sockId).emit('signal', { from_user_id, signal });
      }
      console.log('[server] forwarded signal', { from_user_id, to_user_id, sockets: Array.from(target.sockets) });
    } else {
      console.warn('[server] signal target not found', to_user_id);
    }
  });

  // Relay messages when P2P isn't available: forward to all sockets for the target user
  socket.on('relay_message', ({ to_user_id, from_user_id, payload } = {}) => {
    console.log('[server] relay_message', { from_user_id, to_user_id });
    try { socket.emit('relay_ack', { to_user_id, from_user_id, status: 'received' }); } catch(e){}
    if (!to_user_id) return;
    const target = users.get(to_user_id);
    if (target && target.sockets && target.sockets.size) {
      for (const sockId of target.sockets) {
        io.to(sockId).emit('relay_message', { from_user_id, payload });
      }
      console.log('[server] forwarded relay_message to', Array.from(target.sockets));
    } else {
      console.warn('[server] relay_message: target not found', to_user_id);
      socket.emit('relay_ack', { to_user_id, from_user_id, status: 'target_not_found' });
    }

    // Persist relay message onto both sides' histories
    try {
      const parsed = JSON.parse(payload);
      const text = parsed && parsed.text ? parsed.text : payload;
      const fromName = parsed && parsed.from ? parsed.from : from_user_id;
      persistMessageForUser(to_user_id, from_user_id, { from: fromName, text, ts: Date.now(), relayed: true });
      persistMessageForUser(from_user_id, to_user_id, { from: fromName, text, ts: Date.now(), relayed: true });
    } catch (e) {
      persistMessageForUser(to_user_id, from_user_id, { from: from_user_id, text: payload, ts: Date.now(), relayed: true });
      persistMessageForUser(from_user_id, to_user_id, { from: from_user_id, text: payload, ts: Date.now(), relayed: true });
    }
  });

  socket.on('get-peers', () => {
    if (!socket.userId) return;
    io.to(socket.id).emit('similar_peers', computeSimilarForUser(socket.userId));
  });

  socket.on('disconnect', () => {
    // remove this socket from any user's sockets set
    if (socket.userId && users.has(socket.userId)) {
      const entry = users.get(socket.userId);
      if (entry && entry.sockets) {
        entry.sockets.delete(socket.id);
        if (entry.sockets.size === 0) users.delete(socket.userId);
        else users.set(socket.userId, entry);
      }
    } else {
      // fallback: scan all users
      for (const [id, info] of users.entries()) {
        if (info && info.sockets && info.sockets.has(socket.id)) {
          info.sockets.delete(socket.id);
          if (info.sockets.size === 0) users.delete(id);
          else users.set(id, info);
        }
      }
    }

    // notify others
    for (const [otherId, info] of users.entries()) {
      if (info && info.sockets) {
        for (const sId of info.sockets) {
          io.to(sId).emit('similar_peers', computeSimilarForUser(otherId));
        }
      }
    }

    console.log('[server] socket disconnected', socket.id, 'userId=', socket.userId);
  });
});

server.listen(PORT, () => console.log(`[server] running on http://localhost:${PORT}`));
