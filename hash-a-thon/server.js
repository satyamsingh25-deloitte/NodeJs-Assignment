const express = require('express')
const sequelize = require("./database/db.js")
const app = express();
const PORT = 8000;

app.get('/', (request, response) => {
    response.send("hello");
})

app.listen(PORT, () => {
    console.log(`running on server ${PORT}`)
})

