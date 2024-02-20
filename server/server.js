const express = require("express");
const path = require("path");
//const cookieParser = require('cookie-parser');
require("dotenv").config();
require("colors");
const cors = require("cors");

const connectDB = require("./db");

const port = process.env.PORT || 3000;
const server_url = process.env.SERVER_URL || "http://localhost:5000";

const app = express();

const auth = require("./middleware/auth");
const { checkMatchStatus } = require("./middleware/checkMatchStatus");
const userRouter = require("./routes/user");
const soloRouter = require("./routes/solo");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", `${server_url}`);
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use("/user", userRouter);
app.use("/solo", auth, soloRouter);

const server = app.listen(port, () => {
  console.log(`Server started on port ${port}`.magenta);
});

connectDB();
