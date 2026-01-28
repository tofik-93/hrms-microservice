const express = require("express");

const cors = require("cors");
const helmet = require("helmet");
const employeeRoutes = require("./routes/employeeRoutes");
const attendanceRoutes = require("./routes/attendanceRoutes");
const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());


app.get("/health", (req, res) => {
  res.status(200).json({ status: "HR Service OK" });
});

//API module routes
app.use('/api/employees', employeeRoutes);
app.use("/api/attendance", attendanceRoutes);
module.exports = app;
