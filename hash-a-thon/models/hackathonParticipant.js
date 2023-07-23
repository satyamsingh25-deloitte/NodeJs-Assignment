const { DataTypes } = require('sequelize');
const sequelize = require('../database/db.js');
const Hackathon = require('./hackathon.js');
const Employee = require('./employee.js');

const HackathonParticipant = sequelize.define('hackathon_participants', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  registration_date: {
    type: DataTypes.DATE,
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

// Define associations
HackathonParticipant.belongsTo(Hackathon, { foreignKey: 'hackathon_id' }); // A HackathonParticipant belongs to a Hackathon
Hackathon.hasMany(HackathonParticipant, { foreignKey: 'hackathon_id' }); // A Hackathon can have multiple HackathonParticipants

HackathonParticipant.belongsTo(Employee, { foreignKey: 'employee_id' }); // A HackathonParticipant belongs to an Employee
Employee.hasMany(HackathonParticipant, { foreignKey: 'employee_id' }); // An Employee can participate in multiple Hackathons


module.exports = HackathonParticipant;
