// get dependencies
var app = require('express')();
var Sequelize = require('sequelize');
//  
//  // sequelize initialization
 var sequelize = new Sequelize("mysql://ssadmin:P@ssw0rd@localhost:3306/Service_Station");
   
// check database connection
sequelize.authenticate().then(function(err) {
    if (err) {
       console.log('Unable to connect to the database:', err);
     } else {
       console.log('Connection has been established successfully.');
     }
  });
                      
// initializing a port
 app.listen(5000);
