const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController');

// This matches the POST request you just made
router.post('/register', employeeController.registerEmployee);

module.exports = router;