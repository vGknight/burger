var orm = require("../config/orm.js");

console.log("burgers loaded");


// var burger = {

//     orm.selectAll("*", "burgers", function(result) {
//         var data = result;
//         console.log(data);
//     });


//     orm.insertOne("burgers", "Testing2", false, function(result) {
//         var data = result;
//         console.log(data);
//         console.log(data.affectedrows);
//     });

//     orm.updateOne("burgers", 4, true, function(result) {
//         var data = result;
//         console.log(data);
//         console.log(data.affectedrows);
//     });
// }




var burger = {
    selectAll: function(cb) {
        orm.selectAll("*", "burgers", function(result) {
            cb(result);
            // console.log("-------");
        });
    },

    insertOne: function(name, devoured, cb) {
        orm.insertOne("burgers", name, devoured, function(result) {

            cb(result);
        })
    },

    updateOne: function(item_id, devoured, cb) {
        orm.updateOne("burgers", item_id, devoured, function(result) {

            cb(result);

        })



    }

}


module.exports = burger;

