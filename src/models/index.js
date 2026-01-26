const { Sequelize } = require("sequelize");
const dbConfig = require("../../config/database");

const env = process.env.NODE_ENV || "development";
const config = dbConfig[env];

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = db;
