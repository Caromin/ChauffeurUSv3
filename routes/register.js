const bcrypt = require("bcrypt");
const express = require("express");
const path = require("path");
const router = express.Router();
const { check, validationResult } = require("express-validator/check");

const saltRounds = 10;

// models
const User = require("../src/models/Users");

router.get("/", function(req, res, next) {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

router.post(
  "/new",
  [
    check("firstName").isLength({ min: 2 }),
    check("lastName").isLength({ min: 2 }),
    check("email")
      .isEmail()
      .isLength({ min: 5 }),
    check("password"),
    check("username").isLength({ min: 5 })
  ],
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    } else {
      let preHashPassword = req.body.password;

      // hash is the encrypted password
      bcrypt.hash(preHashPassword, saltRounds, function(err, hash) {
        let postHashPassword = hash;

        let createUser = new User({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
          password: postHashPassword,
          username: req.body.username
        });

        createUser.save(err => {
          // console.log(err);
          if (err) {
            return res.status(200).send({ response: err });
          } else {
            return res.status(200).send({ response: "User added" });
          }
        });
      });
    }
  }
);

router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

module.exports = router;
