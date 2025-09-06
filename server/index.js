const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

const authRoutes = require("./routes/auth");
const contactRoutes = require("./routes/contact");
const itemsRoutes = require("./routes/items");

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
 
// API routes
app.use("/api/auth", authRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/items", itemsRoutes);

// Test route
app.get("/api/test", (req, res) => {
  res.json({ message: "Backend is working!" });
});

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(process.env.PORT || 5000, () =>
      console.log(`🚀 Server running at http://localhost:${process.env.PORT || 5000}`)
    );
  })
  .catch((err) => console.error("❌ MongoDB connection error:", err));
