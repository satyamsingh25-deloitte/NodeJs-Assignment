const express = require('express')
const sequelize = require("./database/db.js");
const Employee = require('./models/employee.js');
const Company = require('./models/company.js');
const Hackathon = require('./models/hackathon.js');
const HackathonParticipant = require('./models/hackathonParticipant.js');
const app = express();
const PORT = 8000;

app.get('/', (request, response) => {
    response.send("hello");
})

app.listen(PORT, () => {
    console.log(`running on server ${PORT}`)
})

