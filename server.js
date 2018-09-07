const appConfig = require("./config.js");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require("express");
const favicon = require("serve-favicon");
const logger = require("morgan");
const mongoose = require("mongoose");
const passport = require("passport");
const path = require("path");
const session = require("express-session");

// webpack reloader
const webpack = require("webpack");
const webpackConfig = require("./webpack.config");
const compiler = webpack(webpackConfig);

// routes
const indexRouter = require("./routes/index");
const loginRouter = require("./routes/login");
const registerRouter = require("./routes/register");
const profileRouter = require("./routes/profile.js");

const app = express();

//mongo connection
mongoose.connect(
  appConfig.mongoServerCli,
  {
    useNewUrlParser: true
  },
  () => {
    console.log("Mongo has connected!");
  }
);

// hot-reloading middleware
app.use(
  require("webpack-dev-middleware")(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
  })
);
app.use(require("webpack-hot-middleware")(compiler));
// session cookies
app.use(
  session({
    secret: appConfig.sessionKey.secret,
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: false,
      maxAge: 36000000
    }
  })
);
// favicon image
app.use(favicon(path.join(__dirname, "public", "favicon.ico")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.use(logger("dev"));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "dist")));
app.use(passport.initialize());
app.use(passport.session());

app.use("/", indexRouter);
app.use("/login", loginRouter);
app.use("/register", registerRouter);
app.use("/profile", profileRouter);

module.exports = app;
