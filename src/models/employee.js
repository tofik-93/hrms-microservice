const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const Employee = sequelize.define('Employee', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  employeeId: { // Matches your screenshot
    type: DataTypes.STRING,
    allowNull: false
  },
  firstName: { // Matches your screenshot
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: { // Matches your screenshot
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  department: DataTypes.STRING,
  status: DataTypes.STRING
}, {
  tableName: 'Employees', // Note the capital 'E' in your screenshot
  timestamps: true
});

module.exports = Employee;