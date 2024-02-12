const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const mongoose = require('mongoose');
const Match = require('../models/Match');
const { startPractice, getMatch } = require('../logic/practice');

// POST start practice mode
router.post('/start', auth, async (req, res) => {
    const matchId = await startPractice(req.user.id, req.body.settings);
    res.cookie('matchId', matchId); // add check if cookie already exists, throw error if true??
    const match = getMatch(matchId);
    res.status(201).json(await match.newTrack());
});

router.post('/:matchId', auth, async (req, res) => {
    // check that user's auth id matches the userId in their matchId class
})
module.exports = router;