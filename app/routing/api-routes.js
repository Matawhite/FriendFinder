var express = require('express');
var app = express();
var apiRouter = express.Router();
var path = require('path');
var arrDogs = require('../data/dogs');

apiRouter.get('/api/:dogs?', function(req, res){
  console.log('route reached')

// refactor this
	var chosen = req.params.arrDogs.dogs;

	if(chosen){
		console.log(chosen);

		for (var i=0; i < arrDogs.dogsdogs.length; i++){

			if (chosen == arrDogs.dogs[i].id){
				res.json(arrDogs.dogs[i]);
				return;
			}
		}

		res.json(false);
	}

	else{
		res.json(arrDogs.dogs);
	}
})

module.exports = apiRouter
