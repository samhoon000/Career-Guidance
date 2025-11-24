const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const { getProgress, updateProgress } = require("../controllers/progressController");

router.get("/", auth, getProgress);
router.post("/update", auth, updateProgress);

module.exports = router;
