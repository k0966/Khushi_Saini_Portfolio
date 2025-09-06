const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  status: { type: String, enum: ["active", "inactive"], default: "active" },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Item", itemSchema);
