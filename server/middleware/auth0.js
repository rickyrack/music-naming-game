const express = require('express');
const { auth } = require('express-oauth2-jwt-bearer');

const jwtCheck = auth({
    audience: 'beatbossapi',
    issuerBaseURL: 'https://dev-fdeyy4z14xmgty34.us.auth0.com/',
    tokenSigningAlg: 'RS256'
});

module.exports = jwtCheck;