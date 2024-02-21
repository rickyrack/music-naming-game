const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
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
    if (emailExists) return res.status(400).json({status: 'Email Exists'});
    else if (usernameExists) return res.status(400).json({status: 'Username Exists'});
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
    const usernameExists = await User.findOne({ username: req.query.username });
    const emailExists = await User.findOne({ email: req.query.email });
    if (emailExists) return res.status(200).json({status: 'Email Exists'});
    else if (usernameExists) return res.status(200).json({status: 'Username Exists'});
    else return res.status(200).json({status: true});
  } catch (error) {
    res.status(500).send(`Error: ${error.message}`);
  }
});

//POST Login User
router.post("/login", async (req, res) => {
  let user;
  try {
    user = await User.findOne({ username: req.body.username });
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
  if (user) return res.status(200).json({status: 'Success', email: user.email});
  res.status(400).json({status: 'User does not exist.'});
});

//GET Get User Data
router.get("/:uid", auth, async (req, res) => {
  try {
    const user = await User.findOne({ authUID: req.user.uid });
    res.status(200).json(user);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    res.status(500).send(`Error: ${error.message}`);
  }

});

//PUT Update User Settings
router.put("/:uid/settings", auth, async (req, res) => {
  // updates one setting per request
  try {
    const settingName = Object.keys(req.body)[0];
    switch (settingName) {
      case 'avatarId':
        if (!typeof req.body.avatarId === 'number') {
          return res.status(400).json(`Error: Invalid avatarId`);
        }
        break;
      default:
        return res.status(400).json(`Error: Invalid Setting`);
        break;
    }
    const user = await User.findOneAndUpdate(
      { authUID: req.user.uid },
      { [`${settingName}`]: req.body[settingName] },
      { new: true }
    )
    res.status(200).json(user);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    res.status(500).send(`Error: ${error.message}`)
  }
});

module.exports = router;
