var express = require('express');
var app = express();
var apiRouter = express.Router();
var path = require('path');
var DataDogs = require('../data/dogs');

module.exports = function(app) {
  app.get("/api/:dog?", function(req,res) {
    // refactor this
    	var chosen = req.params.dog;
    	if(chosen){
        console.log(true)
    		for (var i = 0; i < DataDogs.dogs.length; i++){
    			if (chosen == DataDogs.dogs[i].breed){
    				res.json(DataDogs.dogs[i]);
    				return;
    			}
    		}
    		res.json(false);
    	}

    	else{
    		res.json(DataDogs);
    	}
    });

app.post('/api/newDog', function(req, res){
		var dog = req.body;
		console.log(dog);
		DataDogs.dogs.push(dog);
		res.json(dog);
  })
}
