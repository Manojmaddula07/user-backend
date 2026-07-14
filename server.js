const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const waterRoutes = require("./routes/waterRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection (without .env)
mongoose
  .connect("mongodb+srv://Manoj:manoj07@cluster0.j3rytew.mongodb.net/waterintake")
  .then(() => {
    console.log("Database Connected Successfully");
  })
  .catch((err) => {
    console.log("Database Connection Failed");
    console.log(err);
  });

// Routes
app.use("/api/water", waterRoutes);

// Home Route
app.get("/", (req, res) => {
  res.send("Water Tracker Backend Running...");
});

// Server Port
const PORT = 3000;

// Start Server
app.listen(3000, () => {
  console.log("Server is running at http://localhost:3000");
});
