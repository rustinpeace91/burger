var connection = require("./connection.js");

var orm = {
    selectAll: function(table, func){
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], function(err, result){
            if(err) throw err;
            func(result);
        });

    },

    insertOne: function(table, name, devoured, func){
        var queryString = "INSERT INTO ?? VALUES(id, ?, ?);";
        connection.query(queryString, [table, name, devoured], function(err, result){
            if(err) throw err;
            func(result);

        });
    },

    updateOne: function(table, name, devoured ){
        var queryString = "UPDATE ??  SET devoured = ? WHERE burger_name = ?;"
        connection.query(queryString, [table,devoured,name], function(err, result){
            if(err) throw err;
            func(result);
        })

    }


}


module.exports = orm;