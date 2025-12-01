const mongoose = require('mongoose');

const RequestSchema = new mongoose.Schema({
  mentorId: { type: mongoose.Types.ObjectId, required: true, ref: 'Mentor' },
  studentId: { type: String, required: true }, // store from auth
  message: String,
  status: { type: String, default: 'pending' }
}, { timestamps: true });

module.exports = mongoose.model('Request', RequestSchema);
