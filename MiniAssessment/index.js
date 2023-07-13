const express = require('express');
const app = express();

app.use(logger)

app.use("/matches", require('./routes/matches.js'))

app.use("/teams", require('./routes/teams.js'))

app.use("/stats", require('./routes/stats.js'))

function logger(request, response, next){
  console.log(request.originalUrl);
  next();
}

app.listen(8000, () => {
  console.log('Server is running on port 3000');
});
