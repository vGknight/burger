var orm = require("../config/orm.js");

console.log("burgers loaded");


var burger = {
    // selectAll: function(cb) {
    //     orm.selectAll("*", "burgers", function(result) {
    //         cb(result);

    //     });
    // },

    selectAll: function(cb) {
        orm.selectAll("id, burgers_name, devoured", "burgers", function(result) {
            cb(result);

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