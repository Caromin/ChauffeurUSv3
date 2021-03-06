var express = require("express");
var router = express.Router();
var path = require("path");

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render(path.join(__dirname, "./dist"), "index.html");
});

router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

module.exports = router;
