const { DataTypes } = require('sequelize');
const { v4: uuidv4 } = require('uuid');
const db = require('../db/db'); 
//const Organization = require('./organization.model'); 

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
  // organizationId: {
  //   type: DataTypes.UUID,
  //   allowNull: false,
  //   references: {
  //     model: Organization,
  //     key: 'id',
  //   },
  // },
});

module.exports = User;
