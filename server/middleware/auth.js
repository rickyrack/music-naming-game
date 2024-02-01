const app = require('../services/firebase_auth.config');

const auth = async (req, res, next) => {
    const idToken = req.headers.authorization.split('Bearer ')[1];
    try {
        const authUser = await app.auth().verifyIdToken(idToken);
        if (authUser) {
            req.user = authUser;
            next();
        }
        return;
    } catch (error) {
        return res.status(401).send(`Error: ${error.message}`);
    }
}

module.exports = auth;