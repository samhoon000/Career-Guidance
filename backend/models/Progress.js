// backend/models/Progress.js
// Separate Progress document for each user + track
const mongoose = require("mongoose");

const moduleProgressSchema = new mongoose.Schema({
  moduleId: { type: String, required: true },              // e.g. "excel-fundamentals"
  title: { type: String },                                 // optional; for convenience
  unlocked: { type: Boolean, default: false },
  completedVideos: { type: [String], default: [] },        // array of videoIds
  completedQuizzes: { type: [String], default: [] },       // array of quizIds
  // optional extended fields:
  // videoDurations: { type: Map, of: Number }, // seconds watched per video
  updatedAt: { type: Date, default: Date.now }
}, { _id: false });

const progressSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, index: true },
  trackId: { type: String, required: true, index: true }, // e.g. "data-analyst"
  overallProgress: { type: Number, default: 0 },          // 0-100 (cached for quick reads)
  totalVideos: { type: Number, default: 0 },              // populate initially or keep 0 and frontend sends counts
  totalQuizzes: { type: Number, default: 0 },
  totalModules: { type: Number, default: 0 },

  // modules array for per-module progress
  modules: { type: [moduleProgressSchema], default: [] },

  // global counters (optional convenience fields)
  totalVideosWatched: { type: Number, default: 0 },
  totalQuizzesPassed: { type: Number, default: 0 },
  totalModulesUnlocked: { type: Number, default: 0 },

  updatedAt: { type: Date, default: Date.now }
}, { timestamps: true });

module.exports = require("mongoose").model("Progress", progressSchema);
