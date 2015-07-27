var Sequelize = require('sequelize');
 
module.exports = function (sequelize) {
    var service_bookings = sequelize.define("service_bookings", {
        booking_id:{
            type:Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        customer_id: Sequelize.INTEGER,
        first_name: Sequelize.STRING,
        last_name: Sequelize.STRING,
        email: Sequelize.STRING,
        mobile: Sequelize.STRING,
        mobile_alt: Sequelize.STRING,
        address: Sequelize.TEXT,
        area_id: Sequelize.INTEGER,
        pincode: Sequelize.INTEGER,
        bike_id: Sequelize.STRING,
        ss_id: Sequelize.STRING,
        is_free_service: Sequelize.INTEGER,
        customer_notes: Sequelize.TEXT,
        coupon_id: Sequelize.INTEGER,
        bike_running_km: Sequelize.INTEGER,
        is_regular_service: Sequelize.INTEGER,
        service_rating: Sequelize.FLOAT,
        service_feedback: Sequelize.STRING,
        job_card_number: Sequelize.STRING,
        servicing_by: Sequelize.STRING,
        bill_number: Sequelize.STRING,
        bill_amount: Sequelize.INTEGER,
        bill_path: Sequelize.STRING,
        pending_work: Sequelize.TEXT,
        ss_recommendation: Sequelize.TEXT,
        current_service_status_id: Sequelize.INTEGER,
        submit_date: Sequelize.TIME,
        booking_date: Sequelize.TIME,
        delivery_date: Sequelize.TIME
    });
    return service_bookings;
};
