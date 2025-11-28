// storage.js
const path = require('path');
const Database = require('better-sqlite3');

const DB_PATH = process.env.DB_PATH || path.join(__dirname, 'data.sqlite3');

let db;

module.exports = {
  init: async () => {
    db = new Database(DB_PATH);
    db.exec(`
      CREATE TABLE IF NOT EXISTS messages (
        id TEXT PRIMARY KEY,
        conversation_id TEXT NOT NULL,
        from_user TEXT NOT NULL,
        to_user TEXT NOT NULL,
        body TEXT,
        created_at INTEGER,
        via TEXT,
        status TEXT,
        read INTEGER DEFAULT 0
      );
      CREATE INDEX IF NOT EXISTS idx_conv_created ON messages(conversation_id, created_at DESC);
      CREATE INDEX IF NOT EXISTS idx_to_user ON messages(to_user);
    `);
    return true;
  },

  saveMessage: async (payload) => {
    const stmt = db.prepare(`
      INSERT OR REPLACE INTO messages (id, conversation_id, from_user, to_user, body, created_at, via, status, read)
      VALUES (@id, @conversation_id, @from, @to, @body, @created_at, @via, @status, @read)
    `);
    stmt.run({
      id: payload.id,
      conversation_id: payload.conversation_id,
      from: payload.from,
      to: payload.to,
      body: payload.body,
      created_at: payload.created_at || Date.now(),
      via: payload.via || 'server',
      status: payload.status || 'sent',
      read: payload.read ? 1 : 0
    });
    return true;
  },

  getConversationsFor: async (userId) => {
    const rows = db.prepare(`
      SELECT
        conversation_id as id,
        MAX(created_at) as last_message_at,
        (SELECT body FROM messages m2 WHERE m2.conversation_id = m1.conversation_id ORDER BY created_at DESC LIMIT 1) as last_message_text,
        SUM(CASE WHEN to_user = @userId AND read = 0 THEN 1 ELSE 0 END) as unread_count
      FROM messages m1
      WHERE conversation_id IN (
        SELECT DISTINCT conversation_id FROM messages WHERE from_user = @userId OR to_user = @userId
      )
      GROUP BY conversation_id
      ORDER BY last_message_at DESC
    `).all({ userId });
    return rows;
  },

  getMessages: async (conversationId) => {
    const rows = db.prepare(`
      SELECT id, conversation_id, from_user, to_user, body, created_at, via, status, read
      FROM messages
      WHERE conversation_id = @conversationId
      ORDER BY created_at ASC
    `).all({ conversationId });
    return rows;
  },

  markRead: async (conversationId, user) => {
    const stmt = db.prepare(`
      UPDATE messages SET read = 1 WHERE conversation_id = @conversationId AND to_user = @user AND read = 0
    `);
    const info = stmt.run({ conversationId, user });
    return info.changes;
  }
};
