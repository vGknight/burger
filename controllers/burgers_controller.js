var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

console.log("controller loaded");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {

    burger.selectAll(function(data) {
        var hbsObject = {
            burger: data
        };
        console.log(hbsObject);

        res.render("index", hbsObject);
    });
});

router.post("/api/add", function(req, res) {
    var burgerName = req.body.burgers_name;
    var devoured = req.body.devoured;
    burger.insertOne(burgerName, devoured, function() {

        res.redirect("/");
    });
});

router.put("/api/update/:id", function(req, res) {
    var id = req.params.id;
    var devoured = req.body.devoured;


    console.log("ID " + id + " dev " + devoured);

    burger.updateOne(id, devoured, function(result) {
        console.log(result.changedRows);

        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.render("index");
            // res.status(200);
            // res.send();
        }

        
    });
});



// Export routes for server.js to use.
module.exports = router;