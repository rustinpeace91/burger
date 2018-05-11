//the controller file. This file sets the routes and calls the queries based on the HTTP requests 

var express = require("express");

var router = express.Router();

//requires the burger file to perform the queries 
var burger = require("../models/burger.js");


//the GET request 
router.get("/", function(req, res){   
    burger.selectAll(function(data){
        //places the burgers table into a object variable
        var hbsObject = {
            burgers: data
        };

        //renders the object to index for handlebars 
        res.render("index", hbsObject);
    });
});


//adds a burger to the database based on a POST request
router.post("/api/burgers", function(req,res){
    console.log(req.body);
    //the burger name, the devoured status, callback
    burger.insertOne(req.body.name, 0, function(result){
        //the response completes the request
        res.status(200).end();
    })

});

//updates a single row
router.put("/api/burgers/:id", function(req, res){
    //supplies the burger id, sets the devoured status to 1
    burger.updateOne(req.params.id, 1,  function(result){
        res.json(result);
    })
})

//deletes a single row
router.delete("/api/burgers/:id", function(req, res){
    //supplies the id by the delete parameter
    burger.deleteOne(req.params.id, function(result){
        //res.status(200).end();
        res.json(result);
    })
})




module.exports = router;