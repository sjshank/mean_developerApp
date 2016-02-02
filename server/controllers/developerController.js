// Importing mongo developer model
var mDeveloper = require('../models/developerModel');

/* For adding new developer in mongodb. 
*	'exports' will export all the methods inside one module which can be used whereever required for resp. action
*/
exports.addDeveloper = function(req, res){
	var developer = new mDeveloper(req.body);
	developer.save(function(err, result){
		if(err)
			console.log(err.message);
		res.json(result);
	});
}

/* Retrieve all the developers 
*	'exports' will export all the methods inside one module which can be used whereever required for resp. action
*/
exports.getAllDevelopers = function(req, res){
	mDeveloper.find().sort('name').exec(function(err, results) {
		res.json(results);
	});
}

/*  Delete developer based on ID
*	'exports' will export all the methods inside one module which can be used whereever required for resp. action
*/
exports.deleteDeveloper = function(req, res){
	mDeveloper.findByIdAndRemove(req.params.id, function(err, results) {
		if(err)
			console.log(err.message);
		res.json(results);
	});
}
