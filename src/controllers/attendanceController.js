const Attendance = require('../models/attendance');
const { v4: uuidv4 } = require('uuid');
const { Op } = require('sequelize');

// CLOCK-IN
exports.clockIn = async (req, res) => {
    try {
        // Look for the ID in multiple common naming formats
        const employee_id = req.body.employeeid || req.body.employeeId || req.body.id;

        if (!employee_id) {
            return res.status(400).json({ 
                status: "error", 
                message: "Employee ID is required. Please provide 'employee_id' in the JSON body." 
            });
        }

        const record = await Attendance.create({
            id: uuidv4(),
            employee_id: employee_id,
            clock_in: new Date(),
            status: 'Present'
        });

        res.status(201).json({
            status: "success",
            message: "Clock-in successful",
            data: record
        });
    } catch (error) {
        // If the ID doesn't exist in the Employees table, MySQL will throw a Foreign Key error
        if (error.name === 'SequelizeForeignKeyConstraintError') {
            return res.status(404).json({
                status: "error",
                message: "No employee found with that ID."
            });
        }
        res.status(500).json({ status: "error", message: error.message });
    }
};
// CLOCK-OUT
exports.clockOut = async (req, res) => {
    try {
        const { employee_id } = req.body;

        // Find the latest record for today where clock_out is still null
        const record = await Attendance.findOne({
            where: {
                employee_id,
                clock_out: null
            },
            order: [['createdAt', 'DESC']]
        });

        if (!record) {
            return res.status(404).json({ status: "error", message: "No active clock-in found for this employee." });
        }

        record.clock_out = new Date();
        await record.save();

        res.status(200).json({ status: "success", message: "Clock-out successful", data: record });
    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
};