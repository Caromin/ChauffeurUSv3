const express = require("express");
const path = require("path");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const router = express.Router();

// models
const User = require("../src/models/Users");

/* GET home page. */
router.get("/", function(req, res, next) {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

// this is run if the passport.use was successful
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

// creates a session cookie for user id
passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password"
    },
    function(username, password, done) {
      User.findOne({ email: username }, function(err, user) {
        if (err) {
          console.log("error");
          return done(err);
        }
        if (!user) {
          console.log("Invalid User");
          return done(null, false, { message: "Incorrect username." });
        }
        if (user.password !== password) {
          console.log("Invalid Password");
          return done(null, false);
        } else {
          console.log("Authenticate Successful");
          // when this is done, it will continue to passport.serializeUser
          return done(null, user);
        }
      });
    }
  )
);

router.post(
  "/authenticate",
  passport.authenticate("local", {}),
  (req, res, next) => {
    res.status(200).send({ response: true });
  }
);

router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

module.exports = router;
