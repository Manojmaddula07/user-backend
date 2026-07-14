const mongoose = require("mongoose");
// const dns = require("dns")
// dns.setServer(["8.8.8.8","8.8.4.4"])

const connectDB = async () => {
  try {
    await mongoose.connect(mongodb+srv://Manoj:Manoj07@cluster0.j3rytew.mongodb.net/Manoj);

    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.log("Database Connection Error:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
