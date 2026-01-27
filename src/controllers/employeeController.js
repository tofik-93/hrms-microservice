const Employee = require('../models'); // This refers to your sequelize instance

const employeeController = {
  // Get all employees
  getAll: async (req, res) => {
    try {
      const employees = await Employee.models.Employee.findAll();
      res.status(200).json({ success: true, data: employees });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  },

  // Create a new employee
  create: async (req, res) => {
    try {
      const newEmployee = await Employee.models.Employee.create(req.body);
      res.status(201).json({ success: true, data: newEmployee });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  }
};

module.exports = employeeController;