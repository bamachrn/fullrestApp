//var mongoose = require('mongoose');
var Sequelize = require('sequelize');

//Create the CustomerSchema
module.exports = function(sequelize){
    var customers = sequelize.define('customers', {
        first_name: Sequelize.STRING,
        last_name:  Sequelize.STRING,
        mobile_no:  Sequelize.STRING
    });
    return customers;
};
