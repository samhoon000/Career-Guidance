const Mentor = require('../models/Mentor');
const bcrypt = require('bcryptjs');   // only if you want hashing (optional)

exports.loginMentor = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if email exists in DB
    const mentor = await Mentor.findOne({ email });

    if (!mentor) {
      return res.status(400).json({ message: "Mentor not found" });
    }

    // Compare password (if stored as plain text)
    if (mentor.password !== password) {
      return res.status(400).json({ message: "Invalid password" });
    }

    // If using hashed passwords, use bcrypt instead:
    // const isMatch = await bcrypt.compare(password, mentor.password);
    // if (!isMatch) return res.status(400).json({ message: "Invalid password" });

    return res.status(200).json({ message: "Login successful", mentor });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
