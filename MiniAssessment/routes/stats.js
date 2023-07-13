const express = require('express');
const router = express.Router();

// Mock data
const data = require('../DB/data.json');

// Get top scorers across all teams
router.get('/mostScorers', (req, res) => {
    const players = data.players;
    const maxScore = Math.max(...players.map(player => player.score));
    const topScorers = players.filter(player => player.score === maxScore);
    res.json(topScorers);
});

// Get least scorers across all teams
router.get('/minScorers', (req, res) => {
    const players = data.players;
    const minScore = Math.min(...players.map(player => player.score));
    const minScorers = players.filter(player => player.score === minScore);
    res.json(minScorers);
});

//most wicket taker
router.get('/mostWickets', (req, res) => {
    const players = data.players;
    const maxWickets = Math.max(...players.map(player => player.wickets));
    const maxWicketTaker = players.filter(player => player.wickets === maxWickets);
    res.json(maxWicketTaker);
});

//min wicket taker
router.get('/minWickets', (req, res) => {
    const players = data.players;
    const minWickets = Math.min(...players.map(player => player.wickets));
    const minWicketTaker = players.filter(player => player.wickets === minWickets);
    res.json(minWicketTaker);
});

module.exports = router;