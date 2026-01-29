const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const Employee = sequelize.define('Employee', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  employeeId: {
    type: DataTypes.STRING,
    allowNull: false
  },
  firstName: { 
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
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
  tableName: 'Employees',
  timestamps: true
});

module.exports = Employee;