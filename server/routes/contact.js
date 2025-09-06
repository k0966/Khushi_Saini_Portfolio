const express = require("express");
const Contact = require("../models/Contact");
const { verifyAdmin } = require("../middleware/auth");

const router = express.Router();

// POST - Create new contact message (public route)
router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Please provide name, email, and message" });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Please provide a valid email address" });
    }

    const newContact = new Contact({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      message: message.trim(),
    });

    await newContact.save();

    res.status(201).json({
      message: "Thank you for your message! We'll get back to you soon.",
      success: true,
    });
  } catch (err) {
    console.error("❌ Contact submission error:", err);
    res.status(500).json({ error: "Sorry, there was an error sending your message. Please try again." });
  }
});

// GET all messages (admin only)
router.get("/", verifyAdmin, async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (err) {
    console.error("❌ Contact fetch error:", err);
    res.status(500).json({ error: "Server error" });
  }
});

// DELETE contact by ID (admin only)
router.delete("/:id", verifyAdmin, async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    if (!contact) {
      return res.status(404).json({ error: "Contact not found" });
    }
    res.json({ message: "Contact deleted successfully" });
  } catch (err) {
    console.error("❌ Contact delete error:", err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
