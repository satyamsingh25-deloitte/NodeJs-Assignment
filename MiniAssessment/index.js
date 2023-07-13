const express = require('express');
const app = express();

app.use("/matches", require('./routes/matches.js'))

app.use("/teams", require('./routes/teams.js'))

app.use("/stats", require('./routes/stats.js'))

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
