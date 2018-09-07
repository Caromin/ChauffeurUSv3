const express = require("express");
const router = express.Router();
const path = require("path");

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.status(200).send({ response: "working fine" });
});

router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

module.exports = router;
