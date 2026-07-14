const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://Manoj:manoj9705@cluster0.j3rytew.mongodb.net/waterintake");
    
    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.log("Database Connection Error:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
