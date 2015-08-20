//var mongoose = require('mongoose');
var Sequelize = require('sequelize');

//Create the CustomerSchema
module.exports = function(sequelize){
    var customer_bikes = sequelize.define('customer_bikes', {
        bike_id:{
            type: Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        customer_id: Sequelize.INTEGER,
        brand_id: Sequelize.INTEGER,
        model_name: Sequelize.STRING,
        bike_number: Sequelize.STRING,
        purchase_year: Sequelize.STRING,
        purchase_date: Sequelize.DATE,
        photo_path: Sequelize.STRING,
        puc_date: Sequelize.DATE,
        should_remind_puc: Sequelize.INTEGER,
        insurance_expiry: Sequelize.DATE,
        should_remind_insurance: Sequelize.INTEGER,
    });
    return customer_bikes;
};
