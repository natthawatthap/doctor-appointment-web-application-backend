require('dotenv').config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./src/db/db");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.json());


const authRoutes = require("./src/routes/auth.routes");
app.use("/api/auth", authRoutes);

const scheduleRoutes = require("./src/routes/schedule.routes");
app.use("/api/schedule", scheduleRoutes);

const appointmentRoutes = require("./src/routes/appointment.routes");
app.use("/api/appointment", appointmentRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
