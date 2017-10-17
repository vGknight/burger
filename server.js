// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var orm = require("./config/orm.js")
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;











//start server
app.listen(PORT, function() {
    console.log(`our app is running on port ${ PORT }`);
});