require("dotenv").config();
const app = require("./app");
const db = require("./models");

const PORT = process.env.PORT || 4001;

(async () => {
  try {
    await db.sequelize.authenticate();
    console.log("✅ Database connected");

    app.listen(PORT, () => {
      console.log(`🚀 HR Service running on port ${PORT}`);
    });
  } catch (error) {
    console.error("❌ Database connection failed:", error.message);
    process.exit(1);
  }
})();
