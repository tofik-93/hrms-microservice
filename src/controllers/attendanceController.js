const Attendance = require('../models/attendance');
const { v4: uuidv4 } = require('uuid');

// =========================
// CLOCK-IN
// =========================
exports.clockIn = async (req, res) => {
    try {
        const employee_id =
            req.body.employee_id ||
            req.body.employeeId ||
            req.body.employeeid;

        if (!employee_id) {
            return res.status(400).json({
                status: "error",
                message: "Employee ID is required. Use 'employee_id'."
            });
        }

        // 🔒 Prevent multiple active clock-ins
        const existing = await Attendance.findOne({
            where: {
                employee_id,
                clock_out: null
            }
        });

        if (existing) {
            return res.status(400).json({
                status: "error",
                message: "Employee is already clocked in."
            });
        }

        const record = await Attendance.create({
            id: uuidv4(),
            employee_id,
            clock_in: new Date(),
            status: 'Present'
        });

        res.status(201).json({
            status: "success",
            message: "Clock-in successful",
            data: record
        });

    } catch (error) {
        if (error.name === 'SequelizeForeignKeyConstraintError') {
            return res.status(404).json({
                status: "error",
                message: "No employee found with that ID."
            });
        }

        res.status(500).json({
            status: "error",
            message: error.message
        });
    }
};

// =========================
// CLOCK-OUT
// =========================
exports.clockOut = async (req, res) => {
    try {
        const employee_id =
            req.body.employee_id ||
            req.body.employeeId ||
            req.body.employeeid;

        if (!employee_id) {
            return res.status(400).json({
                status: "error",
                message: "Employee ID is required."
            });
        }

        const record = await Attendance.findOne({
            where: {
                employee_id,
                clock_out: null
            },
            order: [['createdAt', 'DESC']]
        });

        if (!record) {
            return res.status(404).json({
                status: "error",
                message: "No active clock-in found for this employee."
            });
        }

        record.clock_out = new Date();
        await record.save();

        res.status(200).json({
            status: "success",
            message: "Clock-out successful",
            data: record
        });

    } catch (error) {
        res.status(500).json({
            status: "error",
            message: error.message
        });
    }
};
