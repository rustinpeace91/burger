//impot the ORM 
var orm = require("../config/orm.js");

//create a burger object that interacts with the database via the ORM 
var burger = {
    selectAll: function(func){
        orm.selectAll("burgers", function(result){
            func(result);
        });
    },

    insertOne: function(name, devoured, func){
        orm.insertOne("burgers", name, devoured, function(result){
            func(result);
        });
    },

    updateOne: function(name, devoured, func){
        orm.updateOne("burgers", name, devoured, function(result){
            func(result);
        });
    }

};

module.exports = burger;