const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const favicon = require("s");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");

const app = express();

app.use(logger("dev"));
app.use(favicon(path.join(__dirname, "public", "favicon.ico")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "dist")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
//allows for any route, to send the dist folder of index.html for react purposes
app.get("*", function(req, res) {
  res.sendFile(__dirname + "/dist/index.html");
});

module.exports = app;
