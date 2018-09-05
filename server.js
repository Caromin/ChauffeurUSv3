const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const favicon = require("serve-favicon");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const appConfig = require("./config.js");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

// routes
const indexRouter = require("./routes/index");
const loginRouter = require("./routes/login");
const usersRouter = require("./routes/users");
const registerRouter = require("./routes/register");

// models
const User = require("./src/models/Users");

const app = express();

mongoose.connect(
  appConfig.mongoServerCli,
  {
    useNewUrlParser: true
  },
  () => {
    console.log("Mongo has connected!");
  }
);

app.use(favicon(path.join(__dirname, "public", "favicon.ico")));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "dist")));
app.use(passport.initialize());
app.use(passport.session());

app.use("/", indexRouter);
app.use("/login", loginRouter);
app.use("/register", registerRouter);
app.use("/users", usersRouter);

module.exports = app;
