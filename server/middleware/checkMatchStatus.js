const { getMatch, findUserInMatch } = require("../logic/matchStore");


const checkMatchStatus = (req, res, next) => {
    const match = getMatch(req?.params?.matchId);
    if (match) {
        // checking existing matches
        if (match.players.includes(req.user.id)) next();
        else {
            res.status(400).json('Incorrect MatchId');
        }
    }
    else { // most likely headed to /start
        // checking if new match is possible
        if (findUserInMatch(req.user.id)) res.status(400).json('No MatchId Provided');
        else next();
    }
}

module.exports = { checkMatchStatus };