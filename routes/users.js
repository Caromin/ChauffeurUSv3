var express = require("express");
var router = express.Router();

/* GET users listing. */
router.post("/authenticate", function(req, res, next) {
  console.log("successful test");
  res.status(200).send({ response: "working fine" });
});

module.exports = router;
