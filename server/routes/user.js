const express = require("express");
const auth = require("../middleware/auth");
const router = express.Router();
const mongoose = require("mongoose");
const User = require("../models/User");

// POST Create user
router.post("/register", async (req, res) => {
  if (!req.body?.email || !req.body?.username) {
    return res.status(400).send("Error: Missing Email or Username");
  }

  // username check again
  try {
    const usernameExists = await User.findOne({ username: req.body.username });
    const emailExists = await User.findOne({ email: req.body.email });
    if (emailExists) return res.status(400).json('Email Exists');
    else if (usernameExists) return res.status(400).json('Username Exists');
  } catch (error) {
    return res.status(400).send(`Error: ${error.message}`);
  }

  try {
    const newUser = await User.create({
      username: req.body.username,
      email: req.body.email,
      authUID: req.body.authUID
    });
    return res.status(201).send(`User Created: ${newUser}`);
  } catch (error) {
    return res.status(500).send(`Error: ${error.message}`);
  }
});


//GET Check if register data is valid
router.get("/register", async (req, res) => {
  try {
    const usernameExists = await User.findOne({ username: req.body.username });
    const emailExists = await User.findOne({ email: req.body.email });
    if (emailExists) return res.status(200).json('Email Exists');
    else if (usernameExists) return res.status(200).json('Username Exists');
    else return res.status(200).json(true);
  } catch (error) {
    res.status(500).send(`Error: ${error.message}`);
  }
});

//GET Login User
router.get("/login", async (req, res) => {
  let user;
  try {
    console.log('here')
    console.log(req)
    user = await User.findOne({ username: req.body.username });
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
  if (user) return res.status(200).json(user.email);
  res.status(400).send('User does not exist.')
  
});

//GET Get User Data
router.get("/:uid", auth, async (req, res) => {
  const user = await User.findOne({ authUID: req.user.uid });
  console.log(user)
  res.status(200).json(user);
});

module.exports = router;
