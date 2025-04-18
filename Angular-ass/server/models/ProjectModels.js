const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  techstack: { type: [String], required: true },
  link: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, default: null },
  image: { type: String, default: null },
});

module.exports = mongoose.model("Project", projectSchema);
