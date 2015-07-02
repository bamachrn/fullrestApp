var mongoose = require('mongoose');

//Create the CustomerSchema
var CustomerSchema = new mongoose.Schema({
	first_name:{ type: String },
	last_name:{ type: String },	
	mobile_no: { type: String }
});

//Export the model schema
module.exports = CustomerSchema;
