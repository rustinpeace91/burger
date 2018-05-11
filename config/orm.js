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

    updateOne: function(table, id, devoured, func ){
        var queryString = "UPDATE ??  SET devoured = ? WHERE id = ?;"
        connection.query(queryString, [table,devoured,id], function(err, result){
            if(err) throw err;
            func(result);
        })

    },

    deleteOne: function(table, id, func ){
        var queryString = "DELETE FROM ??  WHERE id = ?;"
        connection.query(queryString, [table,id], function(err, result){
            if(err) throw err;
            func(result);
        })

    }


}


module.exports = orm;