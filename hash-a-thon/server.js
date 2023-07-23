const express = require('express');
const app = express();
const PORT = 8000;

const router = require("./index.js")

app.use(router);
    
app.listen(PORT, () => {
    console.log(`running on server ${PORT}`)
})