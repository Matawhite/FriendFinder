var express = require('express');
var app = express();
var router = express.Router();
var path = require('path');
// var dogs = require('../data/dogs');

router.get('/', function(req, res){
	res.sendFile(path.join(__dirname, '../public/home.html'));
})

router.get('/survey', function(req, res){
	res.sendFile(path.join(__dirname, '../public/survey.html'));
})

router.get('/add', function(req, res){
	res.sendFile(path.join(__dirname, '../public/add.html'));
})
router.get('/api/:dogs?', function(req, res){
// refactor this
	var chosen = req.params.dogs;

	if(chosen){
		console.log(chosen);

		for (var i=0; i < dogs.length; i++){

			if (chosen == dogs[i].id){
				res.json(dogs[i]);
				return;
			}
		}

		res.json(false);
	}

	else{
		res.json(dogs);
	}
})

router.post('/api/newdog', function(req, res){

		var newDog = req.body;

		console.log(newDog);

		dogs.push(newDog);

		res.json(newDog);

})

var dogs = [
	{
    "id" : 1,
		"breed" : 'husky',
		"imgURL" : 'http://cdn1-www.dogtime.com/assets/uploads/gallery/siberian-husky-dog-breed-pictures/siberian-husky-dog-breed-pictures-1.jpg',
		"scores" : [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10
      ],
    },
  ];

module.exports = router
