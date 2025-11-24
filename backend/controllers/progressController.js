const Progress = require("../models/progress");

exports.getProgress = async (req, res) => {
  const progress = await Progress.find({ userId: req.user.id });
  res.json(progress);
};

exports.updateProgress = async (req, res) => {
  const { roadmapName, step } = req.body;

  const progress = await Progress.findOneAndUpdate(
    {
      userId: req.user.id,
      roadmapName
    },
    {
      $addToSet: { completedSteps: step }
    },
    { new: true, upsert: true }
  );

  res.json(progress);
};
