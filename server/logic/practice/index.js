const randomString = require('randomized-string');
const practiceMatches = new Map();

const startPractice = async (userId, settings) => {
    const matchId = randomString.generate(10);
    practiceMatches.set(`${matchId}`, new Match(userId, settings));
    return matchId;
}

const getMatch = (matchId) => {
    return practiceMatches.get(matchId);
}

class Match {
    constructor(userId, { mode, genre, winScore, roundTimer }) {
        this.userId = userId;
        this.mode = mode;
        this.genre = genre;
        this.winScore = winScore;
        this.roundTimer = roundTimer;
    }

    async newTrack () {
        return {
            track: 'new track name here'
        }
    }

    end () {

    }
}

module.exports = { startPractice, getMatch };