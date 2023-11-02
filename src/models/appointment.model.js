const { DataTypes } = require("sequelize");
const db = require("../db/db");

//const Patient = require('./Patient'); // Import Patient model
const Organization = require("./organization.model"); // Import Organization model

const Appointment = db.define("Appointment", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  time: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  doctorName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  location: DataTypes.STRING,
  specialty: DataTypes.STRING,
  organizationId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: Organization, // Reference to the Organization model
      key: "id",
    },
  },
});

module.exports = Appointment;
