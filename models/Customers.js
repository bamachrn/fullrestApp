//var mongoose = require('mongoose');
var Sequelize = require('sequelize');

//Create the CustomerSchema
module.exports = function(sequelize){
    var customers = sequelize.define('customers', {
        customer_id:
        {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: Sequelize.STRING,
        last_name:  Sequelize.STRING,
        gender: Sequelize.INTEGER,
        photo_path: Sequelize.STRING,
        email: Sequelize.STRING,
        mobile:  Sequelize.STRING,
        mobile_alt: Sequelize.STRING,
        password: Sequelize.STRING,
        credit_amount: Sequelize.FLOAT,
        should_notify_sms: Sequelize.INTEGER,
        should_notify_email: Sequelize.INTEGER,
        password_key: Sequelize.STRING,
        verify_time: Sequelize.TIME,
        block_time: Sequelize.TIME,
        delete_time: Sequelize.TIME
    });
    return customers;
};
