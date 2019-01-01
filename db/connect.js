var mongoose = require("mongoose");
var path = require("path");
var config = require(path.join(__dirname, "..", "bin", "config"));
mongoose.connect(config.dburl);
var db = mongoose.connection;

console.log("----------------------------------");
console.log(config.dburl);
console.log("----------------------------------");



db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("================================");
  console.log("Connected to db "+config.db);
  console.log("================================");
});

