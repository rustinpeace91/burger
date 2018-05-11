var connection = require("./connection.js");

//stores the ORM as an object
var orm = {
    //Selects all from a table supplied as a paramter
    selectAll: function(table, func){
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], function(err, result){
            if(err) throw err;
            func(result);
        });

    },
    
    //Inserts a single row into the table
    insertOne: function(table, name, devoured, func){
        var queryString = "INSERT INTO ?? VALUES(id, ?, ?);";
        connection.query(queryString, [table, name, devoured], function(err, result){
            if(err) throw err;
            func(result);

        });
    },
    //updates the "devoured status"
    //maybe in the future will change "devoured" to a property parameter that can be taken in
    updateOne: function(table, id, devoured, func ){
        var queryString = "UPDATE ??  SET devoured = ? WHERE id = ?;"
        connection.query(queryString, [table,devoured,id], function(err, result){
            if(err) throw err;
            func(result);
        })

    },
    
    //deletes a row by an id given
    //maybe can change ID to a property taken in by a parameter
    deleteOne: function(table, id, func ){
        var queryString = "DELETE FROM ??  WHERE id = ?;"
        connection.query(queryString, [table,id], function(err, result){
            if(err) throw err;
            func(result);
        })

    }


}


module.exports = orm;