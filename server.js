// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var orm = require("./config/orm.js")
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;


orm.selectAll("*", "burgers", function(result){
	var data = result;
	console.log(data);
});


// orm.insertOne("burgers","Testing2",false, function(result){
// 	var data = result;
// 	console.log(data);
// 	console.log(data.affectedrows);
// });

// orm.updateOne("burgers",4,true, function(result){
// 	var data = result;
// 	console.log(data);
// 	console.log(data.affectedrows);
// });

orm.selectAll("*", "burgers", function(result){
	var data = result;
	console.log(data);
});








//start server
app.listen(PORT, function() {
    console.log(`our app is running on port ${ PORT }`);
});

