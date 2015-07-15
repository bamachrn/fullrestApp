var Sequelize = require('sequelize');
//var config    = require('config').database;  // we use node-config to handle environments

//initialize database
var sequelize = new Sequelize(
          'mysql://localhost:3306/Service_Station',
          'ssadmin',
          'P@ssw0rd'
       );

//Load models
var models = [
      'Customer',
      'ServiceStation'
         ];

models.forEach(function(model) {
      module.exports[model] = sequelize.import(__dirname + '/' + model);
});

//export the connection
module.exports.sequelize = sequelize;
