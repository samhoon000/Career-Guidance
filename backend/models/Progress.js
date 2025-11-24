const mongoose = require("mongoose");

const progressSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  roadmapName: { type: String, required: true },
  completedSteps: { type: [String], default: [] }
}, { timestamps: true });

module.exports = mongoose.model("Progress", progressSchema);
