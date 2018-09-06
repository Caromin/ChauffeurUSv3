const express = require("express");
const router = express.Router();
const path = require("path");
const { check, validationResult } = require("express-validator/check");
const User = require("../src/models/Users");

router.get("/", function(req, res, next) {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

router.post(
  "/new",
  [
    check("firstName")
      .isLength({ min: 2 })
      .matches(/^[a-zA-Z]+$/g),
    check("lastName")
      .isLength({ min: 2 })
      .matches(/^[a-zA-Z]+$/g),
    check("email")
      .isEmail()
      .isLength({ min: 5 }),
    check("password"),
    check("username")
      .isLength({ min: 5 })
      .matches(/^[a-zA-Z0-9]+$/g)
  ],
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    } else {
      let createUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
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
    }
  }
);

module.exports = router;
