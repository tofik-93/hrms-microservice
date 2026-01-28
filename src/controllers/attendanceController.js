const Attendance = require('../models/Attendance'); // Assume model is created
const { v4: uuidv4 } = require('uuid');

exports.clockIn = async (req, res) => {
  try {
    const record = await Attendance.create({
      id: uuidv4(),
      employeeId: req.body.employeeId,
      checkIn: new Date(),
      status: 0 // Present
    });
    res.status(201).json({ message: "Check-in successful", record });
  } catch (error) {
    res.status(500).json({ error: "Failed to log attendance" });
  }
};