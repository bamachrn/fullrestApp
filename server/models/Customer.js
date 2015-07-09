//var mongoose = require('mongoose');
var Sequelize = require('sequelize');
var sequelize = new Sequelize('mysql://localhost:3306/Service_Station','ssadmin','P@ssw0rd');

//Create the CustomerSchema

var Customer = sequelize.define('Customer', {
    first_name: Sequelize.STRING,
    last_name:  Sequelize.STRING,
    mobile_no:  Sequelize.STRING
});

/*var CustomerSchema = new mongoose.Schema({
	first_name:{ type: String },
	last_name:{ type: String },	
	mobile_no: { type: String }
});
*/
//Export the model schema
module.exports = Customer;
