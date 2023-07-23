const { DataTypes } = require('sequelize');
const sequelize = require('../database/db.js');

const Company = sequelize.define('companies', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  website: {
    type: DataTypes.STRING(200),
  },
  role: {
    type: DataTypes.STRING(20),
    allowNull: false,
    defaultValue: 'company',
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

module.exports = Company;
