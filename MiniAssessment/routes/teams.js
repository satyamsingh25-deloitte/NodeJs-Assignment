const express = require('express');
const router = express.Router();

// Mock data
const data = require('../DB/data.json');

// Get all teams
router.get('/', (req, res) => {
  res.json(data.teams);
});

// Get player details by team
router.get('/:teamId/players', (req, res) => {
  const teamId = parseInt(req.params.teamId);
  const players = data.players.filter(player => player.teamId === teamId);
  res.json(players);
});

// Get top scorers by team
router.get('/:teamId/topScorers', (req, res) => {
  const teamId = parseInt(req.params.teamId);
  const teamPlayers = data.players.filter(player => player.teamId === teamId);
  const maxScore = Math.max(...teamPlayers.map(player => player.score));
  const topScorers = teamPlayers.filter(player => player.score === maxScore);
  res.json(topScorers);
});

router.get('/:teamId/topWicketTakers', (req, res) => {
  const teamId = parseInt(req.params.teamId);
  const teamPlayers = data.players.filter(player => player.teamId === teamId);
  const maxWickets = Math.max(...teamPlayers.map(player => player.wickets));
  const topWicketTakers = teamPlayers.filter(player => player.wickets === maxWickets);
  res.json(topWicketTakers);
});

module.exports = router;