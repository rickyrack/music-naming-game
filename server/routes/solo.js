const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Match = require('../models/Match');
const { startSolo, getMatch } = require('../logic/solo');
const startMatch = require('../logic/matchStore');

// POST start solo mode
router.post('/start', async (req, res) => {
    const { matchType, settings } = req.body;
    const matchId = startMatch([req.user.id], matchType, settings);
    res.cookie('matchId', matchId); // add check if cookie already exists, throw error if true??
    const match = getMatch(matchId);
    res.status(201).json(await match.newTrack());
});

router.post('/:matchId', async (req, res) => {
    // check that user's auth id matches the userId in their matchId class
})

module.exports = router;