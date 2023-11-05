const { DataTypes } = require('sequelize');
const db = require('../db/db'); 


const User = db.define('User', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM('admin', 'doctor', 'patient', 'patient navigator'),
    allowNull: false,
  },

});

module.exports = User;
