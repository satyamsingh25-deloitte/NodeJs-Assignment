const express = require('express');
const app = express();

const data = require("./DB/data.json")

app.use(logger)

app.use("/matches",logger, require('./routes/matches.js'))

app.use("/teams", logger, require('./routes/teams.js'))

app.use("/stats", logger, require('./routes/stats.js'))

function logger(request, response, next){
  console.log(request.originalUrl);
  next();
}

app.listen(8000, () => {
  console.log('Server is running on port 3000');
});
