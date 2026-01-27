require("dotenv").config();
const app = require("./app");
const db = require("./models"); // This imports the sequelize instance from src/models/index.js

const PORT = process.env.PORT || 4001;

/**
 * Start Server Function
 * Following BKG Standard: Validate DB connection before listening
 */
const startServer = async () => {
  try {
    // Check database connection
    // We use 'db.authenticate()' because our model index exports the instance directly
    await db.authenticate();
    
    console.log("-----------------------------------------");
    console.log("✅ Database connection established.");
    
    // Debugging (Remove this in production/stable)
    if (process.env.NODE_ENV !== 'production') {
      console.log(`📡 Connected as: ${process.env.DB_USER}`);
    }

    // Start listening for requests
    app.listen(PORT, () => {
      console.log(`🚀 BKG HR Service is live on port: ${PORT}`);
      console.log(`📂 Environment: ${process.env.NODE_ENV || 'development'}`);
      console.log("-----------------------------------------");
    });
  } catch (error) {
    console.error("❌ Database connection failed!");
    console.error(`Reason: ${error.message}`);
    
    // Exit process with failure code as per BKG stability requirements
    process.exit(1);
  }
};

startServer();