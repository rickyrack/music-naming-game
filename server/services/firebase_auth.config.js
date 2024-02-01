let admin = require("firebase-admin");

let serviceAccount = require("./beat-boss-auth-firebase-adminsdk-ajfjw-66cd5cd328.json");

const app = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

module.exports = app;