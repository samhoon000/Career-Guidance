const mongoose = require('mongoose');

const mentorSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true }
}, { collection: "mentorDB" });

module.exports = mongoose.model('Mentor', mentorSchema);
