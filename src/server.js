const app = require('./app');
const sequelize = require('../config/database');
// Import your models so Sequelize knows about them
require('./models/employee'); 

const PORT = process.env.PORT || 3000;

async function startServer() {
  try {
    // 1. Test connection
    await sequelize.authenticate();
    console.log('✅ Connected to MySQL.');

    // 2. Create tables if they don't exist
    // 'alter: true' will update the table if you add new columns later
    await sequelize.sync({ alter: true }); 
    console.log('✅ Database tables synchronized.');

    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('❌ Database error:', error);
  }
}

startServer();