const { DataTypes } = require("sequelize");
const db = require("../db/db");

const Schedule = db.define("Schedule", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  times: {
    type: DataTypes.ARRAY(DataTypes.TIME), 
    allowNull: false,
  },
  doctorName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  location: DataTypes.STRING,
  specialty: DataTypes.STRING,
});

module.exports = Schedule;