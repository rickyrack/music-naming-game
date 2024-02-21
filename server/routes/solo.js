const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Match = require('../models/Match');
//const { startSolo, getMatch } = require('../logic/solo');
const { startMatch, getMatch, matchStore } = require('../logic/matchStore');
const { checkMatchStatus } = require('../middleware/checkMatchStatus');

// POST start solo mode
router.post('/start', checkMatchStatus, async (req, res) => {
    const { matchType, settings } = req.body;
    const modes = ['Normal', 'Zen', 'Rapid'];
    const genres = ['Rock', 'Classical', 'Hip Hop', 'Country', 'EDM', 'All'];
    if (!modes.includes(settings.mode) || !genres.includes(settings.genre)) {
        console.log(settings)
        return res.status(400).json('Mode or Genre Invalid');
    }
    const matchId = startMatch([req.user.uid], matchType, settings);
    const match = getMatch(matchId);
    console.log(matchStore)
    res.status(201).json({match, matchId: matchId});
});

// GET ...
router.get('/:matchId', checkMatchStatus, async (req, res) => {
    try {
        const match = getMatch(req.params.matchId);
        let optionData;
        switch (req?.query?.option) {
            case 'matchType':
                optionData = match.matchType;
                break;
            case 'newTrack':
                optionData = await match.newTrack();
                break;
            default:
                return res.status(200).json({ match: match });
                break;
        }

        res.status(200).json({ matchData: match, optionData: optionData });
    } catch (error) {
        res.status(400).json('Match not found.');
    }


    
});

module.exports = router;