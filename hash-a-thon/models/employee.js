const { DataTypes } = require('sequelize');
const sequelize = require('../database/db.js');

const Employee = sequelize.define('employees', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  experience_level: {
    type: DataTypes.STRING(50),
  },
  technology_stack: {
    type: DataTypes.STRING(100),
  },
  business_unit: {
    type: DataTypes.STRING(100),
  },
  role: {
    type: DataTypes.STRING(20),
    allowNull: false,
    defaultValue: 'employee',
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  updated_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

module.exports = Employee;
