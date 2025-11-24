const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const progressRoutes = require("./routes/progressRoutes");

const app = express();

// Middleware
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(cookieParser());

// DB connect
connectDB();

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/progress", progressRoutes);

// Future socket.io integration placeholder
// const { initChat } = require("./socket/chatSocket");
// initChat(server);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
 