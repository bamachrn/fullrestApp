var Sequelize = require('sequelize');
 
module.exports = function (sequelize) {
    var service_stations = sequelize.define("service_stations", {
        name: Sequelize.STRING,
        address: Sequelize.STRING
    });
    return service_stations;
};
