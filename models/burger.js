//impot the ORM 
var orm = require("../config/orm.js");

//create a burger object that interacts with the database via the ORM 
//right now the only thing that this file really does is supply the name of the table 

var burger = {
    selectAll: function(func){
        orm.selectAll("burgers", function(result){
            //callback function 
            func(result);
        });
    },

    insertOne: function(name, devoured, func){
        orm.insertOne("burgers", name, devoured, function(result){
            func(result);
        });
    },

    updateOne: function(id, devoured, func){
        orm.updateOne("burgers", id, devoured, function(result){
            func(result);
        });
    },

    deleteOne: function(id, func){
        orm.deleteOne("burgers", id, function(result){
            func(result);
        });
    }

};

module.exports = burger;