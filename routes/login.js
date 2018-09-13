const bcrypt = require("bcrypt");
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

router.get("/failed", function(req, res, next) {
  res.status(401).send();
});

// --------------------
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

const comparePasswords = function(password, hash) {
  return bcrypt.compare(password, hash).then(function(res) {
    let test = res;
    return test;
  });
};

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password"
    },
    function(username, password, done) {
      User.findOne({ email: username }, function(err, user) {
        if (user === null) {
          console.log("Email does not exist");
          return done(null, false);
        } else {
          let dbPassword = user.password;

          if (err) {
            console.log("error");
            return done(err);
          }
          if (!user) {
            console.log("Invalid User");
            return done(null, false, { message: "Incorrect username." });
          } else {
            comparePasswords(password, dbPassword).then(results => {
              if (!results) {
                return done(null, false, { message: "Incorrect password." });
              } else {
                // when this is done, it will continue to passport.serializeUser
                return done(null, user);
              }
            });
          }
        }
      });
    }
  )
);

router.post(
  "/authenticate",
  passport.authenticate("local", {
    failureRedirect: "/login/failed"
  }),
  (req, res, next) => {
    let data = {
      sessionId: req.user.id,
      sessionFirstName: req.user.firstName,
      sessionLastName: req.user.lastName,
      sessionEmail: req.user.email,
      sessionUsername: req.user.username
    };
    res.status(200).send({ response: data });
  }
);

router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

module.exports = router;
