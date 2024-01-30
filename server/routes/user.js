const express = require('express');
const router = express.Router();

//Testing Merge

// POST Create user
router.post('/register', async (req, res) => {
    res.status(201).json(req.body);
});

//POST Login User
router.post('/login', async (req, res) => {
    res.status(201).json('blah');
});

//GET User Data
router.get('/:email', async (req, res) => {
    res.status(200).send(req.params.email);
})

module.exports = router;