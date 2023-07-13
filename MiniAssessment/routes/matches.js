const express = require('express');
const router = express.Router();

// Mock data
const data = require('../DB/data.json');

// Get all matches
router.get('/', (req, res) => {
    res.json(data.matches);
});

router.get('/today', (req, res) => {
  const today = new Date().toISOString().split('T')[0];
  const matches = data.matches.filter(match => match.date === today);
  res.json(matches);
});

router.get('/:date', (req, res) => {
  const date = req.params.date;
  const matches = data.matches.filter(match => match.date === date);
  res.json(matches);
});

module.exports = router;