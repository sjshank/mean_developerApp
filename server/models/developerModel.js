//Mongoose module to create mongo model
var mongoose = require('mongoose');

//Model Developers with required members
module.exports = mongoose.model('Developers', {
	name : {type : String, default : "Default Developer"}
	city : {type : String, default : "Delhi"}
	created_at : {type : String, default : new Date().toDateString()}
});
