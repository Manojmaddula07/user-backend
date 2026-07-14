const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const waterRoutes = require("./routes/waterRoutes");

const app = express();


app.use(cors());
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://Manoj:manoj07@cluster0.j3rytew.mongodb.net/waterintake")
  
  .then(() => {
    console.log("✅ Database Connected Successfully");
  })
  .catch((err) => {
    console.log("❌ Database Connection Failed");
    console.log(err);
  });

app.use("/api/water", waterRoutes);

app.get("/", (req, res) => {
  res.send("Water Tracker Backend Running...");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("mongodb+srv://Manoj:manoj9705@cluster0.j3rytew.mongodb.net/waterintake");
});