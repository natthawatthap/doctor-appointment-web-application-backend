const { DataTypes } = require("sequelize");
const db = require("../db/db");
const User = require("./user.model");

const Appointment = db.define("Appointment", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: User,
      key: "id",
    },
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
});

module.exports = Appointment;
