const express = require("express");
const { verifyToken, verifyAdmin } = require("../middleware/auth");
const Item = require("../models/Item");

const router = express.Router();

// Get all items (any logged in user)
router.get("/", verifyToken, async (req, res) => {
  try {
    const items = await Item.find().sort({ createdAt: -1 });
    res.json(items);
  } catch {
    res.status(500).json({ error: "Server error" });
  }
});

// Create new item (only admin)
router.post("/", verifyAdmin, async (req, res) => {
  try {
    const item = new Item(req.body);
    await item.save();
    res.status(201).json(item);
  } catch {
    res.status(500).json({ error: "Server error" });
  }
});

// Delete item (only admin)
router.delete("/:id", verifyAdmin, async (req, res) => {
  try {
    await Item.findByIdAndDelete(req.params.id);
    res.json({ message: "Item deleted" });
  } catch {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
