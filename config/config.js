require('dotenv').config(); // This is critical!

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS, // Make sure this matches your .env key
    database: process.env.DB_NAME,
    host: process.env.DB_HOST || '127.0.0.1',
    dialect: 'mysql',
    logging: false
  }
};