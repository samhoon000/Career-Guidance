// backend/controllers/progressController.js
// Responsible for saving / reading progress.
// This implementation merges incoming updates into the existing Progress document.

const Progress = require("../models/Progress");
const User = require("../models/User"); // used only if you need to fetch user meta

// Helper: calculate overallProgress based on provided counts
function computeOverall(progressDoc) {
  // If totals are known, compute percentage from totalVideos/totalQuizzes/totalModules
  // Weighted calculation: equal weights for videos/quizzes/modules (adjust as needed)
  // Avoid division by zero.
  const weights = { videos: 1, quizzes: 1, modules: 1 }; // can be tuned
  const totalWeight = weights.videos + weights.quizzes + weights.modules;

  let videoPercent = 0, quizPercent = 0, modulePercent = 0;

  if (progressDoc.totalVideos > 0) {
    videoPercent = (progressDoc.totalVideosWatched / progressDoc.totalVideos) * 100;
  }
  if (progressDoc.totalQuizzes > 0) {
    quizPercent = (progressDoc.totalQuizzesPassed / progressDoc.totalQuizzes) * 100;
  }
  if (progressDoc.totalModules > 0) {
    modulePercent = (progressDoc.totalModulesUnlocked / progressDoc.totalModules) * 100;
  }

  const overall = (
    (videoPercent * weights.videos) +
    (quizPercent * weights.quizzes) +
    (modulePercent * weights.modules)
  ) / totalWeight;

  return Math.round(overall);
}

// POST /api/progress/save
exports.saveProgress = async (req, res) => {
  try {
    const userId = req.user.id;
    const { trackId, updates } = req.body;

    // updates is free-form JSON. Example:
    // {
    //   totalVideos: 42,
    //   totalQuizzes: 6,
    //   totalModules: 6,
    //   moduleUpdate: {
    //     moduleId: "excel-fundamentals",
    //     unlocked: true,
    //     addCompletedVideos: ["excel-intro"],
    //     addCompletedQuizzes: ["excel-quiz-1"]
    //   }
    // }

    if (!trackId || !updates) {
      return res.status(400).json({ message: "trackId and updates required" });
    }

    // Find or create progress doc for (user,trackId)
    let prog = await Progress.findOne({ user: userId, trackId });

    if (!prog) {
      prog = new Progress({
        user: userId,
        trackId,
        totalVideos: updates.totalVideos || 0,
        totalQuizzes: updates.totalQuizzes || 0,
        totalModules: updates.totalModules || 0,
        modules: []
      });
    }

    // Merge top-level totals if provided
    if (typeof updates.totalVideos === "number") prog.totalVideos = updates.totalVideos;
    if (typeof updates.totalQuizzes === "number") prog.totalQuizzes = updates.totalQuizzes;
    if (typeof updates.totalModules === "number") prog.totalModules = updates.totalModules;

    // If moduleUpdate provided, handle add/update of that module
    if (updates.moduleUpdate) {
      const mu = updates.moduleUpdate; // moduleUpdate object

      // try to find module
      let module = prog.modules.find(m => m.moduleId === mu.moduleId);
      if (!module) {
        module = {
          moduleId: mu.moduleId,
          title: mu.title || "",
          unlocked: !!mu.unlocked,
          completedVideos: [],
          completedQuizzes: []
        };
        prog.modules.push(module);
      }

      // set unlocked if provided
      if (typeof mu.unlocked === "boolean") module.unlocked = mu.unlocked;

      // add completedVideos array items (avoid duplicates)
      if (Array.isArray(mu.addCompletedVideos)) {
        for (const v of mu.addCompletedVideos) {
          if (!module.completedVideos.includes(v)) module.completedVideos.push(v);
        }
      }

      // add completedQuizzes
      if (Array.isArray(mu.addCompletedQuizzes)) {
        for (const q of mu.addCompletedQuizzes) {
          if (!module.completedQuizzes.includes(q)) module.completedQuizzes.push(q);
        }
      }

      // optional: remove video or quiz ids (if you want)
      // if (Array.isArray(mu.removeCompletedVideos)) ...
    }

    // Recompute convenience counters
    prog.totalVideosWatched = prog.modules.reduce((acc, m) => acc + (m.completedVideos?.length || 0), 0);
    prog.totalQuizzesPassed = prog.modules.reduce((acc, m) => acc + (m.completedQuizzes?.length || 0), 0);
    prog.totalModulesUnlocked = prog.modules.reduce((acc, m) => acc + (m.unlocked ? 1 : 0), 0);

    // Recompute overallProgress (cached)
    prog.overallProgress = computeOverall(prog);
    prog.updatedAt = new Date();

    await prog.save();

    return res.json({ success: true, progress: prog });
  } catch (err) {
    console.error("saveProgress error:", err);
    return res.status(500).json({ message: "Server error" });
  }
};

// GET /api/progress/get?trackId=data-analyst
exports.getProgress = async (req, res) => {
  try {
    const userId = req.user.id;
    const trackId = req.query.trackId;

    if (!trackId) return res.status(400).json({ message: "trackId query param required" });

    const prog = await Progress.findOne({ user: userId, trackId });

    if (!prog) {
      // return empty default structure so frontend can show zeros
      return res.json({
        success: true,
        progress: {
          user: userId,
          trackId,
          overallProgress: 0,
          totalVideos: 0,
          totalQuizzes: 0,
          totalModules: 0,
          modules: [],
          totalVideosWatched: 0,
          totalQuizzesPassed: 0,
          totalModulesUnlocked: 0
        }
      });
    }

    return res.json({ success: true, progress: prog });
  } catch (err) {
    console.error("getProgress error:", err);
    return res.status(500).json({ message: "Server error" });
  }
};
