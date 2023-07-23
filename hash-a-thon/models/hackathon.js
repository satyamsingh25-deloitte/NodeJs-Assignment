const { DataTypes } = require('sequelize');
const sequelize = require('../database/db.js');
const Company = require('./company.js');

const Hackathon = sequelize.define('hackathons', {
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
  start_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  end_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  registration_start_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  registration_end_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  max_participants: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING(20),
    allowNull: false,
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

Hackathon.belongsTo(Company, { foreignKey: 'company_id' }); // A Hackathon belongs to a Company
Company.hasMany(Hackathon, { foreignKey: 'company_id' }); // A Company can have multiple Hackathons

module.exports = Hackathon;
