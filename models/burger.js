var orm = require("../config/orm.js");

console.log("heroku_e11a0e070b1ab27 loaded");


var burger = {
    selectAll: function(cb) {
        orm.selectAll("*", "heroku_e11a0e070b1ab27", function(result) {
            cb(result);

        });
    },

    insertOne: function(name, devoured, cb) {
        orm.insertOne("heroku_e11a0e070b1ab27", name, devoured, function(result) {

            cb(result);
        })
    },

    updateOne: function(item_id, devoured, cb) {
        orm.updateOne("heroku_e11a0e070b1ab27", item_id, devoured, function(result) {

            cb(result);

        })



    }

}


module.exports = burger;

