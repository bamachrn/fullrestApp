var mongoose = require('mongoose');

//Create the CustomerSchema
var CustomerSchema = new mongoose.Schema({
	first_name:{
		type: String,
		required: true
	},
	last_name:{
		type: String,
		required: false
	},	
	moble_no: {
		type: String,
		required: true
	}
});

//Export the model schema
module.exports = CustomerSchema;
