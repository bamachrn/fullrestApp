// get dependencies
var app = require('express')();
var Sequelize = require('sequelize');
  
// sequelize initialization
var sequelize = new Sequelize("mysql://ssadmin:P@ssw0rd@localhost:3306/Service_Station");
   
// model definition
var customer = sequelize.define("customer", {
       first_name: Sequelize.STRING,
       last_name: Sequelize.STRING,
       mobile_no: Sequelize.STRING
   });
            
      //sync the model with the database
        sequelize.sync({ force: true }).then(function(err) {
        // insert new user
        customer.create({
            first_name: "amit",
            last_name: "singh",
            mobile_no: "3754398593"
         }).then(function(customer) {
         // you can now access the newly created user via the variable user
          console.log(customer);
      });
   });
                                                             
// initializing a port
  app.listen(5000);
