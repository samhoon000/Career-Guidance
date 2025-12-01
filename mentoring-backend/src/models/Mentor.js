// backend/src/models/Mentor.js

const mongoose = require('mongoose');

const mentorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    title: { type: String, default: '' },
    domains: { type: [String], default: [] },
    topics: { type: [String], default: [] },
    bio: { type: String, default: '' },
    avatarUrl: { type: String, default: '' },
    rating: { type: Number, default: 0 },
  },
  { timestamps: true }
);

// Force mongoose to use the exact collection name "mentor" (singular)
module.exports = mongoose.model('Mentor', mentorSchema, 'mentor');
