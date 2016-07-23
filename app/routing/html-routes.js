var express = require('express');
var app = express();
var router = express.Router();
var path = require('path');
var dogs = require('../data/dogs');

router.get('/', function(req, res){
	res.sendFile(path.join(__dirname, '../public/home.html'));
})

router.get('/survey', function(req, res){
	res.sendFile(path.join(__dirname, '../public/survey.html'));
})

router.get('/add', function(req, res){
	res.sendFile(path.join(__dirname, '../public/add.html'));
})

module.exports = router
