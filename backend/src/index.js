// backend/src/index.js
require('dotenv').config();
const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const { Server } = require('socket.io');
const Joi = require('joi');

const Mentor = require('./models/Mentor');
const Request = require('./models/Request');
const auth = require('./middleware/auth');

const MONGO_URI = process.env.MONGO_URI;
if (!MONGO_URI) {
  console.error('MONGO_URI is required in env');
  process.exit(1);
}

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: process.env.CLIENT_ORIGIN || '*' }
});

// Middlewares
app.use(helmet());
app.use(cors({ origin: process.env.CLIENT_ORIGIN || '*' }));
app.use(express.json());
app.use(rateLimit({ windowMs: 60_000, max: 200 }));

/* ===============================
   HELPER (safe regex exact match)
================================ */
function escapeRegexForExactMatch(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/* ===============================
   GET /api/mentors  (FIXED)
================================ */
const querySchema = Joi.object({
  domain: Joi.string().optional().allow(''),
  q: Joi.string().optional().allow(''),
  page: Joi.number().integer().min(1).default(1),
  limit: Joi.number().integer().min(1).max(100).default(24)
});

app.get('/api/mentors', async (req, res) => {
  try {
    const { error, value } = querySchema.validate(req.query);
    if (error) return res.status(400).json({ error: error.message });

    const { domain, q, page, limit } = value;

    const filter = {};

    // --- DOMAIN FILTER (Fixed exact match inside array) ---
    if (domain && domain.trim() !== "") {
      const escaped = escapeRegexForExactMatch(domain.trim());
      filter.domains = { $elemMatch: { $regex: `^${escaped}$`, $options: 'i' } };
    }

    // --- SEARCH (name/title/topics/bio) ---
    if (q && q.trim() !== "") {
      const text = q.trim();
      filter.$or = [
        { name: new RegExp(text, 'i') },
        { title: new RegExp(text, 'i') },
        { topics: { $elemMatch: { $regex: text, $options: 'i' } } },
        { bio: new RegExp(text, 'i') }
      ];
    }

    const skip = (page - 1) * limit;

    const mentors = await Mentor.find(filter)
      .sort({ rating: -1, createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean();

    const total = await Mentor.countDocuments(filter);

    res.json({ mentors, total, page, limit });

  } catch (e) {
    console.error('GET /api/mentors error', e);
    res.status(500).json({ error: 'internal' });
  }
});

/* ===============================
   GET /api/mentors/:id
================================ */
app.get('/api/mentors/:id', async (req, res) => {
  try {
    const doc = await Mentor.findById(req.params.id).lean();
    if (!doc) return res.status(404).json({ error: 'Mentor not found' });
    res.json(doc);
  } catch (e) {
    console.error('GET /api/mentors/:id error', e);
    res.status(500).json({ error: 'internal' });
  }
});

/* ===============================
   POST /api/requests
================================ */
app.post('/api/requests', auth, async (req, res) => {
  try {
    const schema = Joi.object({
      mentorId: Joi.string().required(),
      message: Joi.string().max(2000).allow('', null)
    });

    const { error, value } = schema.validate(req.body);
    if (error) return res.status(400).json({ error: error.message });

    const studentId = req.user?.id;
    if (!studentId) return res.status(400).json({ error: 'Student identity missing in token' });

    const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000);

    const existing = await Request.findOne({
      mentorId: value.mentorId,
      studentId,
      status: 'pending',
      createdAt: { $gte: oneHourAgo }
    });

    if (existing)
      return res.status(409).json({ error: 'You already have a pending request for this mentor' });

    const r = new Request({
      mentorId: value.mentorId,
      studentId,
      message: value.message
    });

    await r.save();

    io.to(`mentor_${value.mentorId}`).emit('new_request', {
      requestId: r._id.toString(),
      studentId,
      message: r.message,
      createdAt: r.createdAt
    });

    res.status(201).json({ ok: true, requestId: r._id });
  } catch (e) {
    console.error('POST /api/requests error', e);
    res.status(500).json({ error: 'internal' });
  }
});

/* ===============================
   SOCKET.IO
================================ */
io.on('connection', (socket) => {
  socket.on('subscribe_mentor', (mentorId) => {
    socket.join(`mentor_${mentorId}`);
  });
  socket.on('unsubscribe_mentor', (mentorId) => {
    socket.leave(`mentor_${mentorId}`);
  });
});

/* ===============================
   CHANGE STREAM
================================ */
async function setupChangeStream() {
  try {
    const db = mongoose.connection;
    await new Promise((res) => db.once('open', res));

    const coll = db.collection('mentors');
    let cs;

    try {
      cs = coll.watch([], { fullDocument: 'updateLookup' });
    } catch (err) {
      console.warn("ChangeStream not available:", err.message);
      return;
    }

    cs.on('change', (change) => {
      if (['insert', 'update', 'replace'].includes(change.operationType)) {
        io.emit('mentor_update', { op: change.operationType, mentor: change.fullDocument });
      } else if (change.operationType === 'delete') {
        io.emit('mentor_update', { op: 'delete', mentorId: change.documentKey._id });
      }
    });

    cs.on('error', (err) => {
      console.error("ChangeStream error:", err);
      try { cs.close(); } catch (_) {}
    });

    console.log("ChangeStream for mentors initialized.");
  } catch (err) {
    console.warn("Unable to open change stream:", err.message);
  }
}

/* ===============================
   START SERVER
================================ */
mongoose.connection.on('connected', () => console.log("Mongoose: connected"));
mongoose.connection.on('error', (err) => console.error("Mongoose error:", err));
mongoose.connection.on('disconnected', () => console.warn("Mongoose disconnected"));

async function start() {
  try {
    console.log("Connecting to MongoDB…");
    await mongoose.connect(MONGO_URI);
    console.log("Connected to MongoDB");

    setupChangeStream();

    const PORT = process.env.PORT || 5000;
    server.listen(PORT, () => console.log(`Server running on ${PORT}`));
  } catch (err) {
    console.error("Failed to connect:", err);
    process.exit(1);
  }
}

process.on('uncaughtException', (err) => {
  console.error("Uncaught exception:", err);
  process.exit(1);
});

process.on('unhandledRejection', (reason) => {
  console.error("Unhandled Rejection:", reason);
  process.exit(1);
});

start();
