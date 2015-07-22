var Sequelize = require('sequelize');
 
module.exports = function (sequelize) {
    var service_stations = sequelize.define("service_stations", {
        name: Sequelize.STRING,
        address: Sequelize.STRING,
        contact_no: Sequelize.STRING,
        email: Sequelize.STRING,
        description: Sequelize.STRING,
        siteaddress: Sequelize.STRING,
        logopath: Sequelize.STRING,
        area_id: Sequelize.STRING,
        brand_id: Sequelize.STRING,
        weekly_off_code: Sequelize.STRING,
        ss_timing: Sequelize.STRING,
        ss_associate_id: Sequelize.STRING,
        about_workshop: Sequelize.TEXT,
        about_team: Sequelize.TEXT,
        features_list: Sequelize.TEXT,
        latitude: Sequelize.FLOAT,
        longitude: Sequelize.FLOAT,
        ss_type_code: Sequelize.STRING,
        pick_drop_km: Sequelize.INTEGER,
        facilities: Sequelize.TEXT,
        registertime: Sequelize.TIME,
        verify_time: Sequelize.TIME,
        approve_time: Sequelize.TIME
    });
    return service_stations;
};
