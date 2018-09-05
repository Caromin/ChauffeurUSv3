const fs = require("fs");

const configPath = "./config.json";
// gets all the data in config.json then parses it into an object
// allowing it to be named exports.something = parsed.whatevervariable was moved
const parsed = JSON.parse(fs.readFileSync(configPath, "UTF-8"));

exports.mongoServerCli = parsed.mongoServerCli;
