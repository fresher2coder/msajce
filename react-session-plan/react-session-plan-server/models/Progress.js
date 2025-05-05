// models/Progress.js
const mongoose = require("mongoose");

const progressSchema = new mongoose.Schema({
  userId: String,
  completed: { type: Map, of: Boolean },
});

module.exports = mongoose.model("Progress", progressSchema);
