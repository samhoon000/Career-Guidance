// backend/routes/progressRoutes.js
const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const { saveProgress, getProgress } = require("../controllers/progressController");

// Save progress (authenticated)
router.post("/save", auth, saveProgress);

// Get progress for a track (authenticated)
router.get("/get", auth, getProgress);

module.exports = router;
