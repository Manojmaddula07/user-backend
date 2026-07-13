const express = require("express");

const router = express.Router();

const {
    addWater,
    getAllWaterLogs,
    getWaterById,
    updateWater,
    deleteWater,
    resetToday
} = require("../controllers/waterController");

// Add Today's Water Intake
router.post("/", addWater);

// Get All Water Logs
router.get("/", getAllWaterLogs);

// Get Water Log By ID
router.get("/:id", getWaterById);

// Update Water Log (Increase/Decrease Glasses)
router.put("/:id", updateWater);

// Delete Water Log
router.delete("/:id", deleteWater);

// Reset Today's Water Intake
router.put("/reset/today", resetToday);

module.exports = router;