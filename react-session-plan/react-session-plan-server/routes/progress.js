// routes/progress.js
const express = require("express");
const router = express.Router();
const Progress = require("../models/Progress");

// Save progress
router.post("/save", async (req, res) => {
  const { userId, completed } = req.body;

  try {
    let progress = await Progress.findOne({ userId });
    if (progress) {
      progress.completed = completed;
    } else {
      progress = new Progress({ userId, completed });
    }
    await progress.save();
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get progress
router.get("/:userId", async (req, res) => {
  try {
    const progress = await Progress.findOne({ userId: req.params.userId });
    res.json(progress || {});
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
