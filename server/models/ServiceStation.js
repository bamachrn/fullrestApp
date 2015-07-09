var Sequelize = require('sequelize');
 
module.exports = function (sequelize) {
        var ServiceStation = sequelize.define("ServiceStation", {
                    ss_name: Sequelize.STRING,
                    ss_address: Sequelize.STRING
                            });
            return {
                        ServiceStation: ServiceStation
                };
};
https://milinaudara.wordpress.com/2014/05/24/an-introduction-to-sequelize-js/
