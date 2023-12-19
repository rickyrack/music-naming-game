const express = require('express');
const path = require('path');
//const cookieParser = require('cookie-parser');
require('dotenv').config();
require('colors');
const cors = require('cors');

const connectDB = require('./db');

const port = process.env.PORT || 3000;
const server_url = process.env.SERVER_URL || "http://localhost:5000";

const app = express();

const userRouter = require('./routes/user');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')))

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", `${server_url}`);
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/user', userRouter);

const server = app.listen(port, () => {
  console.log(`Server started on port ${port}`.magenta)
});

connectDB();