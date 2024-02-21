const randomString = require('randomized-string');

const matchStore = new Map();

const startMatch = (userId, players, matchType, settings) => {
    const matchId = randomString.generate(10);
    matchStore.set(`${matchId}`, new Match(userId, players, matchType, settings));
    return matchId;
}

const getMatch = (matchId) => {
    return matchStore.get(matchId);
}

const findUserInMatch = (userId) => {
    let foundMatchId = false;
    [...matchStore.keys()].forEach(matchId => {
        if (matchStore.get(matchId).players.includes(userId)) foundMatchId = matchId;
    });
    return foundMatchId;
}

class Match {
    constructor(players, matchType, { mode, genre }) {
        this.players = players;
        this.matchType = matchType;
        this.mode = mode; // affects round timer and/or winScore
        this.genre = genre;
        this.winScore = 10000; // can be changed later or maybe a match setting
        this.score = {
            p1: 0,
            p2: 0
        }
    }

    async newTrack () {
        return {
            track: 'new track name/data here'
        }
    }

    end (matchId) {
        matchStore.delete(matchId);
    }
}

module.exports = { startMatch, getMatch, findUserInMatch, matchStore };