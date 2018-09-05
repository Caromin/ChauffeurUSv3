const express = require("express");
const router = express.Router();
const path = require("path");
const { check, validationResult } = require("express-validator/check");

router.get("/", function(req, res, next) {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

router.post(
  "/new",
  [
    check("firstName")
      .trim()
      .isLength({ min: 1 })
      .matches(/^[a-zA-Z]+$/g),
    check("lastName")
      .trim()
      .isLength({ min: 1 })
      .matches(/^[a-zA-Z]+$/g),
    check("email")
      .isEmail()
      .isLength({ min: 5 })
      .normalizeEmail({ all_lowercase: true }),
    check("password").trim(),
    check("username")
      .trim()
      .isLength({ min: 5 })
      .matches(/^[a-zA-Z0-9]+$/g)
  ],
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).send({ errors: errors.array() });
    } else {
      return res.status(200).send();
    }
  }
);

module.exports = router;

// firstName: this.state.firstName,
// lastName: this.state.lastName,
// email: this.state.email,
// password: this.state.password,
// username: this.state.username
