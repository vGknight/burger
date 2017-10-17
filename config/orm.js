var cnx = require('./connection.js');

console.log("orm.js loaded");






//
// selectAll() 

// insertOne() 

// updateOne()

    cnx.query('SELECT id,burgers_name,devoured,date FROM `burgers`', function(error, results, fields) {
        if (error) throw error;

        for (var i = 0; i < results.length; i++) {

            // idArr.push(results[i].item_id); // add id's to control variable array for validation later
            console.log(" ");
            console.log("ID: " + results[i].id + "Name: " + results[i].burgers_name + " | Devoured: " + results[i].devoured + " | TimeStamp: " + results[i].date);
            console.log(" ");


//             //build html
        }
//         // cnx.end();


//         // res.json(results);


    });

// module.exports = orm;