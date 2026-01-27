// Inside src/models/index.js
const { Sequelize } = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../../config/config.js')[env];

const sequelize = new Sequelize(config.database, config.username, config.password, config);

// Exporting the instance directly (BKG Microservice Style)
module.exports = sequelize;