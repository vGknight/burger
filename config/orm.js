var cnx = require('./connection.js');

console.log("orm.js loaded");


var orm = {
    selectAll: function(whatToSelect, tableInput, cb) {

        var queryString = "SELECT ?? FROM ??";
        cnx.query(queryString, [
            whatToSelect, tableInput
        ], function(err, result) {
            if (err) {
                throw err;
            }

            cb(result);

        });


    },



    insertOne: function(table, burgers_name, devoured, cb) {

        var queryString = "INSERT INTO " + table + " SET ?";

        var newBurger = {
            burgers_name: burgers_name,
            devoured: devoured
        };
        cnx.query(queryString, newBurger, function(err, result) {

            if (err) {
                throw err;
            }

            cb(result);
        });

    },

    updateOne: function(table, item_id, devoured, cb) {

        var queryString = "UPDATE " + table + " SET ? WHERE ?";

        cnx.query(queryString, [{ devoured: devoured, },
                //WHERE Clause
                { id: item_id }
            ],

            function(error, results) {
                if (error) throw error;
                cb(results);

            });


    }


}


module.exports = orm;