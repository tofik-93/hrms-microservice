const Employee = require('../models/employee'); 
const { v4: uuidv4 } = require('uuid');

exports.registerEmployee = async (req, res) => {
    // Check if req.body exists at all
    if (!req || !req.body) {
        return res.status(400).json({
            status: "error",
            message: "Request body is empty. Make sure you are sending JSON in Postman."
        });
    }

    try {
        const { email, first_name, last_name } = req.body;

        const newEmployee = await Employee.create({
            id: uuidv4(),
            first_name: first_name,
            last_name: last_name,
            email: email,
            status: 0 
        });

        res.status(201).json({ status: "success", data: newEmployee });
    } catch (error) {
        res.status(400).json({ status: "error", message: error.message });
    }
};