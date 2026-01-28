const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const Attendance = sequelize.define('Attendance', {
  id: {
    type: DataTypes.CHAR(36),
    primaryKey: true
  },
  employee_id: {
    type: DataTypes.CHAR(36),
    allowNull: false,
    references: {
      model: 'employees',
      key: 'id'
    }
  },
  clock_in: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  clock_out: {
    type: DataTypes.DATE,
    allowNull: true
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: 'Present' // e.g., Present, Late, Excused
  }
}, {
  tableName: 'attendance',
  timestamps: true // This gives us 'createdAt' and 'updatedAt'
});

module.exports = Attendance;