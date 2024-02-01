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

//GET Get User Data
router.get('/:uid', async (req, res) => {
    res.status(200).send(req.params.uid);
})

module.exports = router;