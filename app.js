/*
*	Import module dependencies
*/
var express = require('express'),
	path = require('path'),
	bodyParser = require('body-parser'),
	expressHbs = require('express3-handlebars'),
	mongoose = require('mongoose'),
	developerCtrl = require('./server/controllers/developerController'),
	app = express();

var server = require('./server')(app);

/*
*	Built-in middleware express.static to server static files such as images/css/js etc
*/
	app.use('/js', express.static('client/js/'));
	app.use(express.static('node_modules'));
	
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: false }));
	
	mongoose.connect('mongodb://localhost:27017/mean-sample');

//Show landing page
app.get('/', function(req, res){
	res.sendFile(__dirname + '/client/views/landingPage.htm');
})

//Add new developer. POST request
app.post('/api/developers', developerCtrl.addDeveloper);
//Get all developers. GET request
app.get('/api/developers', developerCtrl.getAllDevelopers);
//Delete developer based on id. DELETE request
app.delete('/api/delete/:id', developerCtrl.deleteDeveloper);

