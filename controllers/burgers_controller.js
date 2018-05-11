var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res){

    
    burger.selectAll(function(data){
        var hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req,res){
    console.log(req.body);
    burger.insertOne(req.body.name, 0, function(result){
        res.status(200).end();
    })

});

router.put("/api/burgers/:id", function(req, res){

    burger.updateOne(req.params.id, 1,  function(result){
        res.json(result);

    })
})

router.delete("/api/burgers/:id", function(req, res){
    burger.deleteOne(req.params.id, function(result){
        //res.status(200).end();
        res.json(result);
    })
})




module.exports = router;