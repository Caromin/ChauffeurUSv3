const express = require("express");
const router = express.Router();
const passport = require("passport"),
  LocalStrategy = require("passport-local").Strategy;

// models
const User = require("../src/models/Users");

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.status(200).send({ response: "working fine" });
});

passport.serializeUser(function(user, done) {
  done(null, user.id);
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
          return done(null, user);
        }
      });
    }
  )
);

router.post("/login", passport.authenticate("local", {}), (req, res, next) => {
  res.status(200).send({ response: "Authentication Finished" });
});

module.exports = router;
