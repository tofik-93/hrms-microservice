const { Sequelize } = require('sequelize'); // Importing the class
require('dotenv').config();

// Creating the instance
const sequelize = new Sequelize(
  process.env.DB_NAME, 
  process.env.DB_USER, 
  process.env.DB_PASS, 
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    logging: false
  }
);

module.exports = sequelize; // Exporting the instance (the actual connection)