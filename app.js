/*
*	Importing required modules in app.js
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
*	Built-in middleware express.static for making files such as images/css/js accessable
*/
	app.use('/js', express.static('client/js/'));
	app.use('/stylesheets', express.static('client/stylesheets/'));
	app.use(express.static('node_modules'));
	
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: false }));


	// view engine setup
	app.set('views', path.join(__dirname, 'server/views'));
	app.set('view engine', 'htm');


/*
*   Middleware to set request header. Added manually. Next method is called to jump into next middleware function
*/
		app.use(function(req, res, next){
		  res.set('X-Powered-By', 'MEAN Sample Application');
		  next();
		});

	
/*
*	Establish mongodb connection. This will mean-sample schema in mongo database.
*/
	mongoose.connect('mongodb://127.0.0.1:27017/mean-sample');

//Render landing page
app.get('/', function(req, res){
	res.sendFile(__dirname + '/client/views/landingPage.htm');
})


/*
*	Handling incoming http request
*/


//Add new developer. POST request
app.post('/api/developers', developerCtrl.addDeveloper);
//Get all developers. GET request
app.get('/api/developers', developerCtrl.getAllDevelopers);
//Delete developer based on id. DELETE request
app.delete('/api/delete/:id', developerCtrl.deleteDeveloper);


/*
*	Error Handler. Development error handler.
*/
if (app.get('env') === 'development') {
		  app.use(function(err, req, res, next) {
		  	console.log(err);
			res.status(err.status || 500);
			res.render('error', {
			  message: "Currently we are experiencing technical difficulties. Please try after some time.",
			  error: err
			});
		  });
}

