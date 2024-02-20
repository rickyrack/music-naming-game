const { getMatch, findUserInMatch } = require("../logic/matchStore");


const checkMatchStatus = (req, res, next) => {
    console.log(req)
    const match = getMatch(req?.params?.matchId);
    if (match) {
        // checking existing matches
        if (match.players.includes(req.user.uid)) next();
        else {
            res.status(400).json('Incorrect MatchId');
        }
    }
    else { // most likely headed to /start
        // checking if new match is possible
        if (findUserInMatch(req.user.uid)) res.status(400).json('User In Game; Provide MatchId');
        else next();
    }
}

module.exports = { checkMatchStatus };