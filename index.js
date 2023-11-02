const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./src/db/db");

const app = express();
const PORT = 8080;

app.use(cors());
app.use(bodyParser.json());

// Routes
const authRoutes = require("./src/routes/authRoutes");
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
