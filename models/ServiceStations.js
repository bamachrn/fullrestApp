var Sequelize = require('sequelize');
 
module.exports = function (sequelize) {
    var service_stations = sequelize.define("service_stations", {
        ss_id:{
            type: Sequelize.STRING,
            primaryKey: true,
            autoIncrement: true
        },
        name: Sequelize.STRING,
        address: Sequelize.STRING,
        contact_ph: Sequelize.STRING,
        mobile: Sequelize.STRING,
        email: Sequelize.STRING,
        description: Sequelize.STRING,
        website: Sequelize.STRING,
        logo_path: Sequelize.STRING,
        area_id: Sequelize.STRING,
        brand_id: Sequelize.STRING,
        weekly_off_id: Sequelize.STRING,
        timing: Sequelize.STRING,
        about_workshop: Sequelize.TEXT,
        about_team: Sequelize.TEXT,
        facilities: Sequelize.TEXT,
        ss_type_id: Sequelize.STRING,
        pick_drop_km: Sequelize.STRING,
        latitude: Sequelize.FLOAT,
        longitude: Sequelize.FLOAT,
        register_time: Sequelize.TIME,
        verify_time: Sequelize.TIME,
        approve_time: Sequelize.TIME
    });
    return service_stations;
};
