const { Sequelize } = require("sequelize");

const db = new Sequelize(
  "doctor_appointment_web_application_db",
  "postgres",
  "P@ssw0rd",
  {
    host: "localhost",
    dialect: "postgres",
  }
);

db.authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

db.sync({ alter: true }) 
  .then(() => {
    console.log("Database synced");
  })
  .catch((err) => {
    console.error("Error syncing database:", err);
  });

module.exports = db;
