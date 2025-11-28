// public/client.js
// Mobile-friendly client + persistence + server-backed chat history
// - Prefills registration inputs from sessionStorage on load
// - Makes username immutable after first registration
// - Allows domain changes at any time and Enter always works to update domain
// - Emits 'store_message' to server for persisted history
// - Restores chat_history from server on register
// - Various UI/UX and Android tweaks retained

const socket = io();

// --- ANDROID DETECTION: adds 'android' class to <html> for Android-specific styling ---
(function addAndroidClass() {
  try {
    const ua = navigator.userAgent || navigator.vendor || window.opera || '';
    const isAndroid = /android/i.test(ua);
    if (isAndroid) {
      document.documentElement.classList.add('android');
      console.log('[client] Android detected -> applying android UI tweaks');
    }
  } catch (e) { /* ignore */ }
})();

// DOM refs
const nameInit = document.getElementById('nameInit');
const registerInit = document.getElementById('registerInit');
const domainInit = document.getElementById('domainInit');
const regNotice = document.getElementById('regNotice');

const similarModalOverlay = document.getElementById('similarModalOverlay');
const similarModalList = document.getElementById('similarModalList');
const closeModalBtn = document.getElementById('closeModal');

const chatOverlay = document.getElementById('chatOverlay');
const chatListEl = document.getElementById('chatList');
const listSearch = document.getElementById('listSearch');
const closeShell = document.getElementById('closeShell');
const connectBtn = document.getElementById('connectBtn');

const convTitle = document.getElementById('convTitle');
const convStatus = document.getElementById('convStatus');
const convBody = document.getElementById('convBody');
const convInput = document.getElementById('convInput');
const convSend = document.getElementById('convSend');

const leftCol = document.querySelector('.left-col');
const listToggle = document.querySelector('.list-toggle');

// --- ANDROID registration layout tweak: stack domain select under name input ---
(function androidRegistrationLayoutTweak() {
  try {
    if (!document.documentElement.classList.contains('android')) return;
    if (!nameInit || !domainInit || !registerInit) return;
    const parent = nameInit.parentElement;
    if (!parent) return;
    parent.style.display = 'flex';
    parent.style.flexDirection = 'column';
    parent.style.alignItems = 'stretch';
    parent.style.gap = '10px';
    nameInit.style.width = '100%';
    domainInit.style.width = '100%';
    registerInit.style.width = '110px';
    registerInit.style.alignSelf = 'flex-end';
    registerInit.style.marginTop = '4px';
  } catch (e) {}
})();

// sessionStorage per-tab
let localUserId = sessionStorage.getItem('p2p:user_id') || null;
let localName = sessionStorage.getItem('p2p:name') || '';
let localDomain = sessionStorage.getItem('p2p:domain') || '';

// state containers
const peerNames = new Map();
const lastMessageSnippet = new Map();
const activePeers = new Map();
const chatWindows = new Map();
const initiatedChats = new Set();

// NEW: online peers & unread counts
const onlinePeers = new Set();
const unreadCounts = new Map();

let selectedPeer = null;

function ensureLocalUserId(){
  if (!localUserId) {
    try { localUserId = crypto && crypto.randomUUID ? crypto.randomUUID() : ('u-'+Date.now()+'-'+Math.random().toString(36).slice(2,8)); }
    catch(e){ localUserId = 'u-'+Date.now()+'-'+Math.random().toString(36).slice(2,8); }
    sessionStorage.setItem('p2p:user_id', localUserId);
  }
  return localUserId;
}
function showRegisteredNotice(show=true){ if (regNotice) regNotice.style.display = show ? 'block' : 'none'; }

function ensureChatWindowEntryObj(userId) {
  if (!chatWindows.has(userId)) chatWindows.set(userId, { messages: [], connected: false });
  else {
    const v = chatWindows.get(userId);
    if (!v || typeof v !== 'object' || !Array.isArray(v.messages)) {
      chatWindows.set(userId, { messages: [], connected: !!(v && v.connected) });
    }
  }
  return chatWindows.get(userId);
}

// helper to set convStatus text and ensure typing class is removed when not typing
function setConvStatusText(text) {
  if (!convStatus) return;
  convStatus.textContent = text;
  convStatus.classList.remove('typing');
}

function showTypingIndicator() {
  if (!convStatus) return;
  convStatus.textContent = 'typing...';
  convStatus.classList.add('typing');
}

// pushMessage: records a message; ensures peer appears in left list only after message exchange
function pushMessage(userId, from, text, local) {
  const win = ensureChatWindowEntryObj(userId);
  win.messages.push({ from, text, local, ts: Date.now() });

  // SNIPPET: ensure username and message are separated by ": " to avoid "LickHow..." issue
  if (local) {
    lastMessageSnippet.set(userId, 'You: ' + String(text || '').slice(0,60));
  } else {
    if (from) lastMessageSnippet.set(userId, String(from) + ': ' + String(text || '').slice(0,60));
    else lastMessageSnippet.set(userId, String(text || '').slice(0,60));
  }

  // add to initiatedChats only when a message sent/received
  initiatedChats.add(userId);

  // If incoming message and conversation not selected, mark unread
  if (!local) {
    if (selectedPeer !== userId) {
      const prev = unreadCounts.get(userId) || 0;
      unreadCounts.set(userId, prev + 1);
    }
    // mark sender online as well
    onlinePeers.add(userId);
  }

  // Keep the similar-peers modal refreshed across sockets
  try { socket.emit('get-peers'); } catch(e){}

  // Persist message to server so history survives refresh (best-effort)
  try {
    const lastMsg = win.messages[win.messages.length - 1];
    socket.emit('store_message', {
      owner_user_id: localUserId || null,
      other_user_id: userId,
      from: lastMsg.from,
      text: lastMsg.text,
      relayed: !lastMsg.local,
      ts: lastMsg.ts
    });
  } catch (e) { /* ignore store failures */ }

  // Re-render left list (now that this peer has an exchanged message)
  renderChatList();
}

function appendMessageToBody(userId, sender, text, isLocal) {
  if (!convBody) return;
  const msg = document.createElement('div');
  msg.className = 'chat-msg ' + (isLocal ? 'msg-me' : 'msg-them');
  msg.textContent = (isLocal ? 'You: ' : (sender ? sender + ': ' : 'Peer: ')) + text;
  convBody.appendChild(msg);
  convBody.scrollTop = convBody.scrollHeight + 200;
}

// left list rendering (adds online green dot and unread green badge at rightmost corner)
function renderChatList(serverPeers){
  if (!chatListEl) return;
  const rowsById = new Map();

  // Add peers that have been initiated (i.e., messages exchanged OR explicitly added to initiatedChats)
  for (const id of initiatedChats) {
    if (!rowsById.has(id)) rowsById.set(id, { user_id: id, name: peerNames.get(id) || id, domain: '' });
  }

  // Also show peers that have messages in chatWindows (defensive)
  for (const [id, win] of chatWindows.entries()) {
    if (win && Array.isArray(win.messages) && win.messages.length > 0) {
      if (!rowsById.has(id)) rowsById.set(id, { user_id: id, name: peerNames.get(id) || id, domain: '' });
    }
  }

  const rows = Array.from(rowsById.values());
  rows.sort((a,b) => {
    if (selectedPeer && a.user_id === selectedPeer) return -1;
    if (selectedPeer && b.user_id === selectedPeer) return 1;
    const sa = (lastMessageSnippet.get(a.user_id) || '').toLowerCase();
    const sb = (lastMessageSnippet.get(b.user_id) || '').toLowerCase();
    if (!!sa && !sb) return -1;
    if (!sa && !!sb) return 1;
    return String(a.name||'').localeCompare(b.name||'');
  });

  chatListEl.innerHTML = '';
  rows.forEach(p => {
    const item = document.createElement('div');
    item.className = 'chat-item' + (p.user_id === selectedPeer ? ' active' : '');
    item.dataset.peerId = p.user_id;
    // ensure the item is a positioned container so badges can be placed at its right edge
    item.style.position = 'relative';
    item.style.paddingRight = '48px'; // make space for the right-corner badge

    // avatar container (we will append status dots inside)
    const avatar = document.createElement('div');
    avatar.className = 'avatar';
    avatar.style.position = 'relative';
    avatar.textContent = (p.name && p.name[0]) ? p.name[0].toUpperCase() : (p.user_id||'U')[0];

    // ONLINE DOT (green) - similar to Instagram presence indicator (over avatar)
    if (onlinePeers.has(p.user_id) || (activePeers.get(p.user_id) && activePeers.get(p.user_id).connected)) {
      const onlineDot = document.createElement('span');
      onlineDot.className = 'online-dot';
      onlineDot.style.position = 'absolute';
      onlineDot.style.width = '10px';
      onlineDot.style.height = '10px';
      onlineDot.style.borderRadius = '50%';
      onlineDot.style.background = '#28c76f'; // green
      onlineDot.style.border = '2px solid white';
      onlineDot.style.right = '-4px';
      onlineDot.style.top = '-4px';
      onlineDot.style.boxShadow = '0 0 0 2px rgba(40,199,111,0.08)';
      avatar.appendChild(onlineDot);
    }

    const meta = document.createElement('div');
    meta.className = 'chat-meta';
    const nameEl = document.createElement('div');
    nameEl.className = 'chat-name';
    nameEl.textContent = p.name || p.user_id;
    const snippet = document.createElement('div');
    snippet.className = 'chat-snippet';
    snippet.textContent = lastMessageSnippet.get(p.user_id) || '';

    meta.appendChild(nameEl);
    meta.appendChild(snippet);

    item.appendChild(avatar);
    item.appendChild(meta);

    // UNREAD BADGE: show a small green circle at the rightmost corner of the chat item (WhatsApp-style)
    const unread = (unreadCounts.get(p.user_id) || 0);
    if (unread > 0) {
      const badge = document.createElement('span');
      badge.className = 'unread-badge';
      // position at right center
      badge.style.position = 'absolute';
      badge.style.right = '14px';
      badge.style.top = '50%';
      badge.style.transform = 'translateY(-50%)';
      badge.style.minWidth = '14px';
      badge.style.height = '14px';
      badge.style.padding = '0';
      badge.style.borderRadius = '50%';
      badge.style.display = 'inline-block';
      badge.style.background = '#10b981'; // green-ish
      badge.style.border = '2px solid white';
      badge.style.boxShadow = '0 6px 18px rgba(16,185,129,0.12)';
      item.appendChild(badge);
    }

    item.onclick = () => openConversation(p.user_id, p.name);
    chatListEl.appendChild(item);
  });

  if (!rows.length) {
    chatListEl.innerHTML = '<div style="padding:18px;color:var(--muted)">No active chats yet — click Connect to select peers to chat with, or wait for someone to message you.</div>';
  }
}

function openConversation(userId, displayName) {
  selectedPeer = userId;
  if (convBody) convBody.innerHTML = '';
  const title = displayName || peerNames.get(userId) || userId;
  if (convTitle) convTitle.textContent = `Chat with ${title}`;

  if (chatListEl) {
    Array.from(chatListEl.querySelectorAll('.chat-item')).forEach(el => {
      el.classList.toggle('active', el.dataset.peerId === userId);
    });
  }

  const win = ensureChatWindowEntryObj(userId);
  win.messages.forEach(m => appendMessageToBody(userId, m.from, m.text, !!m.local));
  setConvStatusText(win.connected ? 'connected' : 'connecting...');
  if (chatOverlay) chatOverlay.style.display = 'flex';
  // clear unread for this conversation (user opened it)
  if (unreadCounts.has(userId)) {
    unreadCounts.delete(userId);
    renderChatList();
  }
  if (window.innerWidth <= 900 && leftCol) leftCol.classList.add('collapsed');
  setTimeout(() => { try { convInput && convInput.focus(); } catch(e){} }, 120);
}

function openShellAndSelectPeer(userId, displayName) {
  if (displayName) peerNames.set(userId, displayName);
  ensureChatWindowEntryObj(userId);
  if (chatOverlay) chatOverlay.style.display = 'flex';
  setTimeout(() => {
    selectedPeer = userId;
    openConversation(userId, displayName);
  }, 120);
}

// simple-peer (unchanged)
function createPeer(initiator, remoteUserId) {
  const peer = new SimplePeer({
    initiator: !!initiator,
    trickle: true,
    config: { iceServers: [{ urls: 'stun:stun.l.google.com:19302' }] }
  });

  peer.on('signal', data => {
    socket.emit('signal', { to_user_id: remoteUserId, from_user_id: localUserId, signal: data });
  });

  peer.on('connect', () => {
    const win = ensureChatWindowEntryObj(remoteUserId);
    win.connected = true;
    if (selectedPeer === remoteUserId) setConvStatusText('connected');
    socket.emit('get-peers');
  });

  peer.on('data', chunk => {
    const raw = chunk.toString();
    try {
      const obj = JSON.parse(raw);
      if (obj && obj.type === 'chat') {
        // Record message and update UI only if appropriate; DO NOT auto-open the chat
        pushMessage(remoteUserId, obj.from || remoteUserId, obj.text || raw, false);
        // append to the conversation view only if user is currently viewing that peer
        if (selectedPeer === remoteUserId) {
          appendMessageToBody(remoteUserId, obj.from || remoteUserId, obj.text || raw, false);
        }
      } else {
        pushMessage(remoteUserId, remoteUserId, raw, false);
        if (selectedPeer === remoteUserId) appendMessageToBody(remoteUserId, remoteUserId, raw, false);
      }
    } catch(e) {
      pushMessage(remoteUserId, remoteUserId, raw, false);
      if (selectedPeer === remoteUserId) appendMessageToBody(remoteUserId, remoteUserId, raw, false);
    }
  });

  peer.on('error', err => {
    console.warn('[webrtc] peer error', err);
    const win = ensureChatWindowEntryObj(remoteUserId);
    win.connected = false;
    if (selectedPeer === remoteUserId) setConvStatusText('error');
  });

  peer.on('close', () => {
    const win = ensureChatWindowEntryObj(remoteUserId);
    win.connected = false;
    if (selectedPeer === remoteUserId) setConvStatusText('not connected');
    activePeers.delete(remoteUserId);
    // peer closed — remove online state for this peer (best-effort; server will sync via similar_peers)
    onlinePeers.delete(remoteUserId);
    renderChatList();
  });

  return peer;
}

function startChatWith(targetUserId, displayName){
  if (!targetUserId) return;
  ensureLocalUserId();
  if (displayName) peerNames.set(targetUserId, displayName);

  if (!chatWindows.has(targetUserId)) chatWindows.set(targetUserId, { messages: [], connected: false });
  if (activePeers.has(targetUserId)) {
    openConversation(targetUserId, displayName);
    return;
  }
  const p = createPeer(true, targetUserId);
  activePeers.set(targetUserId, p);
  renderChatList();
  openConversation(targetUserId, displayName);
}

// socket handlers
socket.on('connect', () => {
  console.log('[socket] connected', socket.id);
  // Auto-register if we have previously saved user info in sessionStorage
  try {
    if (!localUserId) localUserId = sessionStorage.getItem('p2p:user_id') || null;
    if (!localName) localName = sessionStorage.getItem('p2p:name') || '';
    if (!localDomain) localDomain = sessionStorage.getItem('p2p:domain') || '';
    if (localUserId && localName) {
      // re-register silently with the server so server restores this user's sockets and we get similar_peers + chat_history
      // Note: domain may be empty — server will normalize/handle it.
      socket.emit('register', { user_id: localUserId, name: localName, domain: localDomain || '' });
      // ensure the registration notice doesn't force UX back to initial card
      showRegisteredNotice(true);
    }
  } catch (e) { console.warn('[client] auto-register error', e); }
});

socket.on('registered', ({ user_id, name } = {}) => {
  if (user_id) { localUserId = user_id; sessionStorage.setItem('p2p:user_id', user_id); }
  if (name) { localName = name; sessionStorage.setItem('p2p:name', name); }
  showRegisteredNotice(true);
});

socket.on('signal', ({ from_user_id, signal } = {}) => {
  if (!from_user_id || !signal) return;
  if (!peerNames.has(from_user_id)) peerNames.set(from_user_id, from_user_id);

  // mark sender online (someone trying to signal is online)
  onlinePeers.add(from_user_id);
  renderChatList();

  let p = activePeers.get(from_user_id);
  if (!p) {
    p = createPeer(false, from_user_id);
    activePeers.set(from_user_id, p);
  }
  try { p.signal(signal); } catch(e) { console.warn('failed to signal', e); }
});

socket.on('relay_message', ({ from_user_id, payload } = {}) => {
  if (!from_user_id) return;
  // mark online when relay received
  onlinePeers.add(from_user_id);
  ensureChatWindowEntryObj(from_user_id);
  try {
    const obj = JSON.parse(payload);
    if (obj && obj.type === 'chat') {
      // Record message and update UI only if appropriate; DO NOT auto-open the chat
      pushMessage(from_user_id, obj.from || from_user_id, obj.text || '', false);
      if (selectedPeer === from_user_id) appendMessageToBody(from_user_id, obj.from || from_user_id, obj.text || '', false);
    } else {
      pushMessage(from_user_id, from_user_id, payload, false);
      if (selectedPeer === from_user_id) appendMessageToBody(from_user_id, from_user_id, payload, false);
    }
  } catch(e) {
    pushMessage(from_user_id, from_user_id, payload, false);
    if (selectedPeer === from_user_id) appendMessageToBody(from_user_id, from_user_id, payload, false);
  }
});

// TYPING: when server forwards typing events, show "typing..." on receiver
let typingTimersByPeer = new Map(); // peerId -> timeout id
socket.on('typing', ({ from_user_id, typing } = {}) => {
  if (!from_user_id) return;
  // only show typing indicator for the currently selected peer
  if (selectedPeer !== from_user_id) {
    return;
  }

  if (typing) {
    showTypingIndicator();
    if (typingTimersByPeer.has(from_user_id)) {
      clearTimeout(typingTimersByPeer.get(from_user_id));
      typingTimersByPeer.delete(from_user_id);
    }
    const t = setTimeout(() => {
      typingTimersByPeer.delete(from_user_id);
      const win = chatWindows.get(from_user_id);
      setConvStatusText((win && win.connected) ? 'connected' : 'not connected');
    }, 2200);
    typingTimersByPeer.set(from_user_id, t);
  } else {
    if (typingTimersByPeer.has(from_user_id)) {
      clearTimeout(typingTimersByPeer.get(from_user_id));
      typingTimersByPeer.delete(from_user_id);
    }
    const win = chatWindows.get(from_user_id);
    setConvStatusText((win && win.connected) ? 'connected' : 'not connected');
  }
});

// Modal peers (same-domain): update peerNames and onlinePeers set from server list
socket.on('similar_peers', (list) => {
  if (!Array.isArray(list)) return;

  // normal caching of names
  list.forEach(p => { if (p && p.user_id && p.name) peerNames.set(p.user_id, p.name); });

  // Recompute onlinePeers from this list (best-effort)
  onlinePeers.clear();
  list.forEach(p => { if (p && p.user_id) onlinePeers.add(p.user_id); });

  renderSimilarModal(list);
  renderChatList();
});

// RESTORE chat history from server
socket.on('chat_history', (conversations = {}) => {
  // conversations is an object: { otherId: [ { from, text, ts, relayed } ] }
  try {
    Object.entries(conversations).forEach(([otherId, msgs]) => {
      if (!otherId || !Array.isArray(msgs) || !msgs.length) return;
      ensureChatWindowEntryObj(otherId);
      const win = chatWindows.get(otherId);
      msgs.forEach(m => {
        // Avoid duplicating messages if we already have same ts & text
        const exists = (win.messages || []).some(x => x.ts === m.ts && String(x.text) === String(m.text));
        if (!exists) {
          const isLocal = (m.from === (localName || localUserId));
          win.messages.push({ from: m.from || otherId, text: m.text || '', local: !!isLocal, ts: m.ts || Date.now() });
          initiatedChats.add(otherId);
          lastMessageSnippet.set(otherId, (isLocal ? 'You: ' : (m.from || otherId) + ': ') + String((m.text || '').slice(0,60)));
        }
      });
    });

    // Re-render list and preserve currently selected conversation
    renderChatList();
    // If user already had a selectedPeer, re-open it and populate convBody from the stored messages
    if (selectedPeer && chatWindows.has(selectedPeer)) {
      convBody.innerHTML = '';
      const win = chatWindows.get(selectedPeer);
      (win.messages || []).forEach(m => appendMessageToBody(selectedPeer, m.from, m.text, !!m.local));
      setConvStatusText((win.connected) ? 'connected' : 'not connected');
    }
  } catch (e) {
    console.warn('[client] failed to restore chat_history', e);
  }
});

// Modal helpers
function openSimilarModal(){ 
  if (chatOverlay) chatOverlay.style.display = 'flex';
  if (similarModalOverlay) similarModalOverlay.style.display='flex';
  if (similarModalList) similarModalList.innerHTML = '<div style="color:var(--muted)">Searching for peers in the same domain...</div>';
  socket.emit('get-peers');
}
function closeSimilarModal(){ if (similarModalOverlay) similarModalOverlay.style.display='none'; if (similarModalList) similarModalList.innerHTML=''; }

function renderSimilarModal(list) {
  if (!similarModalList) return;
  similarModalList.innerHTML = '';
  if (!Array.isArray(list) || !list.length) { similarModalList.innerHTML = '<div style="color:var(--muted)">(no matches yet)</div>'; return; }

  list.forEach(p => {
    if (!p || !p.user_id) return;
    const div = document.createElement('div');
    div.className = 'peer';
    const left = document.createElement('div'); left.style.display='flex'; left.style.flexDirection='column'; left.style.gap='6px'; left.style.flex='1';
    const nameEl = document.createElement('div'); nameEl.className='peer-name'; nameEl.textContent = p.name || p.user_id;
    const subEl = document.createElement('div'); subEl.className='peer-sub'; subEl.textContent = (p.domain === 'cloud_computing') ? 'Cloud Computing' : (p.domain === 'data_analytics' ? 'Data Analytics' : '');
    const stateEl = document.createElement('div'); stateEl.className='small-muted'; stateEl.textContent = 'not connected';
    left.appendChild(nameEl); left.appendChild(subEl); left.appendChild(stateEl);

    const right = document.createElement('div'); right.style.display='flex'; right.style.flexDirection='column'; right.style.gap='8px'; right.style.alignItems='flex-end';
    const chatBtn = document.createElement('button'); chatBtn.className='chat-btn'; chatBtn.textContent='Chat';
    chatBtn.onclick = (e) => {
      e.preventDefault();
      closeSimilarModal();
      selectedPeer = p.user_id;
      peerNames.set(p.user_id, p.name || p.user_id);
      ensureChatWindowEntryObj(p.user_id);
      startChatWith(p.user_id, p.name);
      setTimeout(() => openConversation(p.user_id, p.name), 180);
    };
    right.appendChild(chatBtn);
    div.appendChild(left);
    div.appendChild(right);
    similarModalList.appendChild(div);
  });
}

// ---------- Registration handling (username immutable; domain editable & Enter always works) ----------
registerInit && (registerInit.onclick = () => {
  try {
    const name = (nameInit.value || '').trim();
    const domain = (domainInit.value || '') || '';

    if (!name) return alert('enter your name');
    if (!domain) return alert('select a domain');

    // Ensure we have a local user id
    ensureLocalUserId();

    // Check stored values
    const existingId = sessionStorage.getItem('p2p:user_id');
    const existingName = sessionStorage.getItem('p2p:name');

    if (existingId && existingName && existingName === name) {
      // This is a domain update (or re-register) for the same user id/name.
      localUserId = existingId;
      localName = existingName;
      localDomain = domain;
      sessionStorage.setItem('p2p:domain', localDomain);

      // Make username immutable
      try { if (nameInit) nameInit.disabled = true; } catch(e){}

      // Keep domain editable and Enter enabled
      try { if (domainInit) domainInit.disabled = false; if (registerInit) registerInit.disabled = false; } catch(e){}

      // Emit register to update server (same user id)
      try {
        socket.emit('register', { user_id: localUserId, name: localName, domain: localDomain });
        showRegisteredNotice(true);
      } catch (e) { console.warn('[client] domain-update register failed', e); }

      // Optionally open peers modal again when domain changes
      openSimilarModal();
      return;
    }

    // First-time registration path (or name changed intentionally)
    localName = name;
    localDomain = domain;
    sessionStorage.setItem('p2p:user_id', localUserId);
    sessionStorage.setItem('p2p:name', localName);
    sessionStorage.setItem('p2p:domain', localDomain);

    // Make username immutable after registration, but keep domain editable
    try {
      if (nameInit) nameInit.disabled = true;
      if (domainInit) domainInit.disabled = false;
      if (registerInit) registerInit.disabled = false;
    } catch (e) {}

    // Emit register to server
    try {
      socket.emit('register', { user_id: localUserId, name: localName, domain: localDomain });
      showRegisteredNotice(true);
    } catch (e) {
      console.warn('[client] register error', e);
    }

    // Open modal after registering
    openSimilarModal();
  } catch (err) {
    console.warn('[client] register handler failed', err);
  }
});

// Close shell: attempt to close the current browser tab/window completely.
// Works reliably only when the tab was opened by script (window.open).
// Fallback: navigates or shows a "you may close this tab" message.
if (closeShell) {
  closeShell.onclick = () => {
    try {
      // hide overlays
      if (chatOverlay) chatOverlay.style.display = 'none';
      if (similarModalOverlay) similarModalOverlay.style.display = 'none';
      if (leftCol && leftCol.classList.contains('collapsed')) leftCol.classList.remove('collapsed');
    } catch (e) { /* ignore */ }

    try {
      try { window.open('', '_self'); } catch (e) {}
      try { window.close(); } catch (e) {}
      setTimeout(() => {
        if (!window.closed) {
          try {
            window.location.href = "/index.html";
          } catch (err) {
            try {
              document.documentElement.innerHTML = `
                <body style="margin:0;font-family:system-ui,Arial,Helvetica,sans-serif;">
                  <div style="min-height:100vh;display:flex;align-items:center;justify-content:center;background:#f7fafc;">
                    <div style="padding:28px;background:white;border-radius:12px;box-shadow:0 10px 30px rgba(0,0,0,0.06);max-width:720px;text-align:center;">
                      <h2 style="margin:0 0 12px 0;color:#0b2545;">You may close this tab</h2>
                      <p style="margin:0 0 18px;color:#556978;">This window couldn't be closed automatically. Please close the tab manually to return to the main site.</p>
                      <button id="tryBack" style="background:#0b6cff;color:white;padding:10px 14px;border-radius:8px;border:0;cursor:pointer;">Go to main page</button>
                    </div>
                  </div>
                </body>`;
              const tryBack = document.getElementById('tryBack');
              tryBack && (tryBack.onclick = () => { try { window.location.href = '/index.html'; } catch(e){} });
            } catch(e){}
          }
        }
      }, 250);
    } catch (err) {
      try {
        window.location.href = "/index.html";
      } catch (e) {}
    }
  };
}

// Connect button: show shell and modal
connectBtn && (connectBtn.onclick = () => {
  if (chatOverlay) chatOverlay.style.display = 'flex';
  openSimilarModal();
});

// Modal close
closeModalBtn && (closeModalBtn.onclick = closeSimilarModal);

// --- TYPING indicator (client-side) ---
let typingSent = false;
let typingIdleTimer = null;
const TYPING_IDLE_MS = 1500;

function notifyTyping(toUserId, isTyping) {
  try {
    socket.emit('typing', { to_user_id: toUserId, from_user_id: localUserId, typing: !!isTyping });
  } catch(e){}
}

if (convInput) {
  convInput.addEventListener('input', () => {
    if (!selectedPeer) return;
    if (!typingSent) {
      typingSent = true;
      notifyTyping(selectedPeer, true);
    }
    if (typingIdleTimer) clearTimeout(typingIdleTimer);
    typingIdleTimer = setTimeout(() => {
      typingSent = false;
      typingIdleTimer = null;
      notifyTyping(selectedPeer, false);
    }, TYPING_IDLE_MS);
  });

  convInput.addEventListener('blur', () => {
    if (!selectedPeer) return;
    if (typingIdleTimer) {
      clearTimeout(typingIdleTimer);
      typingIdleTimer = null;
    }
    if (typingSent) {
      typingSent = false;
      notifyTyping(selectedPeer, false);
    }
  });
}

// Send message (click or Enter)
function doSendMessage() {
  if (!selectedPeer) return alert('select a chat on the left');
  const text = (convInput.value || '').trim();
  if (!text) return;
  const peer = activePeers.get(selectedPeer);
  const payload = { type:'chat', text, from: localName || localUserId };

  ensureChatWindowEntryObj(selectedPeer);

  // stop typing immediately
  if (typingIdleTimer) { clearTimeout(typingIdleTimer); typingIdleTimer = null; }
  if (typingSent) { typingSent = false; notifyTyping(selectedPeer, false); }

  if (peer && peer.connected) {
    try {
      peer.send(JSON.stringify(payload));
      pushMessage(selectedPeer, 'You', text, true);
      appendMessageToBody(selectedPeer, 'You', text, true);
      convInput.value = '';
    } catch(e) {
      alert('send failed: ' + (e && e.message || e));
    }
  } else {
    socket.emit('relay_message', { to_user_id: selectedPeer, from_user_id: localUserId, payload: JSON.stringify(payload) });
    pushMessage(selectedPeer, 'You', text + ' (relayed)', true);
    appendMessageToBody(selectedPeer, 'You', text + ' (relayed)', true);
    convInput.value = '';
    if (!activePeers.has(selectedPeer)) startChatWith(selectedPeer, peerNames.get(selectedPeer));
  }
}

convSend && (convSend.onclick = doSendMessage);
convInput && convInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    doSendMessage();
  }
});

// search filter
listSearch && (listSearch.oninput = () => {
  const q = (listSearch.value || '').toLowerCase().trim();
  if (!chatListEl) return;
  Array.from(chatListEl.children).forEach(el => {
    const name = (el.querySelector('.chat-name') && el.querySelector('.chat-name').textContent || '').toLowerCase();
    el.style.display = (!q || name.includes(q)) ? '' : 'none';
  });
});

// Mobile: add toggle button behavior
(function setupListToggle(){
  if (!listToggle || !leftCol) return;
  listToggle.style.display = 'none';
  listToggle.addEventListener('click', () => {
    leftCol.classList.toggle('collapsed');
  });

  function checkSmall() {
    if (window.innerWidth <= 900) listToggle.style.display = 'block';
    else { listToggle.style.display = 'none'; leftCol.classList.remove('collapsed'); }
  }
  window.addEventListener('resize', checkSmall);
  checkSmall();
})();

// When the message input receives focus, adjust overlay height (helps Android keyboard)
(function setupInputFocusResize(){
  if (!convInput || !chatOverlay) return;
  function adjustForKeyboard() {
    try {
      chatOverlay.style.height = window.innerHeight + 'px';
      setTimeout(() => convBody.scrollTop = convBody.scrollHeight + 200, 70);
    } catch(e){}
  }
  convInput.addEventListener('focus', adjustForKeyboard);
  convInput.addEventListener('blur', () => {
    try { if (chatOverlay) chatOverlay.style.height = ''; } catch(e){}
  });

  window.addEventListener('orientationchange', () => {
    setTimeout(() => { if (chatOverlay) chatOverlay.style.height = window.innerHeight + 'px'; }, 250);
  });
})();

// socket connect debug (already handled above but keep here if later needed)
socket.on('connect', () => console.log('[socket] connected', socket.id));

// ---------- Prefill registration inputs & set username immutable but domain editable ----------
(function hideInitIfRegistered(){
  try {
    const sId = sessionStorage.getItem('p2p:user_id');
    const sName = sessionStorage.getItem('p2p:name');
    const sDomain = sessionStorage.getItem('p2p:domain');

    if (sId && sName) {
      // restore local variables
      localUserId = sId;
      localName = sName;
      localDomain = sDomain || '';

      // Prefill the form inputs so the UI shows the registered values after refresh
      try {
        if (nameInit) {
          nameInit.value = localName;
          nameInit.setAttribute('data-restored','true');
          // make the username field unchangeable (disabled/read-only)
          nameInit.disabled = true;
        }
        if (domainInit) {
          domainInit.value = localDomain;
          domainInit.setAttribute('data-restored','true');
          // IMPORTANT: keep domain select ENABLED so user may change domain
          domainInit.disabled = false;
        }
        // Ensure Enter button is enabled so domain changes can be submitted
        if (registerInit) registerInit.disabled = false;
      } catch (e) {}

      // Indicate registration (do not hide registration card; we want domain editable)
      showRegisteredNotice(true);

      // Auto re-register silently when socket connects is already handled in socket.on('connect').
      // But proactively emit register if socket is already connected (page reload may cause race otherwise)
      if (socket && socket.connected) {
        try {
          socket.emit('register', { user_id: localUserId, name: localName, domain: localDomain || '' });
        } catch (e) {}
      }
    } else {
      // No existing registration: ensure name input is editable and Enter enabled
      try {
        if (nameInit) nameInit.disabled = false;
        if (domainInit) domainInit.disabled = false;
        if (registerInit) registerInit.disabled = false;
      } catch(e){}
    }
  } catch(e){ console.warn('[client] hideInitIfRegistered failed', e); }
})();
