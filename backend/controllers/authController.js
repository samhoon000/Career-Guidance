const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Email regex
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Password: 8 char, uppercase, lowercase, number
const validPassword = (password) => {
  return (
    password.length >= 8 &&
    /[A-Z]/.test(password) &&
    /[a-z]/.test(password) &&
    /\d/.test(password)
  );
};

// ---------------- SIGNUP ----------------
exports.signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!emailPattern.test(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    if (!validPassword(password)) {
      return res.status(400).json({
        message:
          "Password must be 8+ characters and include uppercase, lowercase, and a number"
      });
    }

    const emailExists = await User.findOne({ email });
    if (emailExists)
      return res.status(400).json({ message: "Email already exists" });

    const usernameExists = await User.findOne({ username });
    if (usernameExists)
      return res.status(400).json({ message: "Username already taken" });

    const hashedPw = await bcrypt.hash(password, 10);

    await User.create({ username, email, password: hashedPw });

    res.json({ message: "Signup successful" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// ---------------- LOGIN ----------------
// ---------------- LOGIN ----------------
exports.login = async (req, res) => {
  try {
    console.log("\n===== LOGIN REQUEST RECEIVED =====");
    console.log("RAW BODY:", req.body);

    const { emailOrUsername, password } = req.body;

    console.log("Email/Username Provided:", emailOrUsername);
    console.log("Password Provided:", password);

    // Check user
    const user = await User.findOne({
      $or: [{ email: emailOrUsername }, { username: emailOrUsername }]
    });

    console.log("USER FOUND IN DB:", user);

    if (!user) {
      console.log("Result: Incorrect Email/Username\n");
      return res.status(400).json({ message: "Incorrect email/username" });
    }

    // Compare password
    const match = await bcrypt.compare(password, user.password);
    console.log("Password Match:", match);

    if (!match) {
      console.log("Result: Incorrect Password\n");
      return res.status(400).json({ message: "Incorrect password" });
    }

    // JWT Token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d"
    });

    console.log("Login Successful. Token Generated.\n");

    return res.json({
      message: "Login successful",
      token,
      username: user.username
    });

  } catch (error) {
    console.log("LOGIN SERVER ERROR:", error);
    res.status(500).json({ message: "Server error" });
  }
  console.log("JWT_SECRET PRESENT:", process.env.JWT_SECRET ? "YES" : "NO");

};
