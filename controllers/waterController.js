const WaterLog = require("../models/WaterLog");

// Add Today's Water Intake
const addWater = async (req, res) => {
    try {

        const { userName, glasses, goal, date } = req.body;

        const newWater = new WaterLog({
            userName,
            glasses,
            goal,
            date
        });

        await newWater.save();

        res.status(201).json({
            message: "Water Log Added Successfully",
            data: newWater
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

// Get All Water Logs
const getAllWaterLogs = async (req, res) => {

    try {

        const logs = await WaterLog.find().sort({ createdAt: -1 });

        res.status(200).json(logs);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

// Get Water Log By ID
const getWaterById = async (req, res) => {

    try {

        const log = await WaterLog.findById(req.params.id);

        if (!log) {

            return res.status(404).json({
                message: "Water Log Not Found"
            });

        }

        res.status(200).json(log);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

// Update Water Log
const updateWater = async (req, res) => {

    try {

        const updatedLog = await WaterLog.findByIdAndUpdate(

            req.params.id,

            req.body,

            { new: true }

        );

        if (!updatedLog) {

            return res.status(404).json({
                message: "Water Log Not Found"
            });

        }

        res.status(200).json({
            message: "Water Log Updated Successfully",
            data: updatedLog
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

// Delete Water Log
const deleteWater = async (req, res) => {

    try {

        const deletedLog = await WaterLog.findByIdAndDelete(req.params.id);

        if (!deletedLog) {

            return res.status(404).json({
                message: "Water Log Not Found"
            });

        }

        res.status(200).json({
            message: "Water Log Deleted Successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

// Reset Today's Water Intake
const resetToday = async (req, res) => {

    try {

        const { date } = req.body;

        await WaterLog.updateMany(
            { date: date },
            { glasses: 0 }
        );

        res.status(200).json({
            message: "Today's Water Intake Reset Successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

module.exports = {
    addWater,
    getAllWaterLogs,
    getWaterById,
    updateWater,
    deleteWater,
    resetToday
};