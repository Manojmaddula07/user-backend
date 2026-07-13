const mongoose = require("mongoose");

const WaterLogSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      trim: true
    },

    glasses: {
      type: Number,
      default: 0
    },

    goal: {
      type: Number,
      default: 8
    },

    date: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("WaterLog", WaterLogSchema);