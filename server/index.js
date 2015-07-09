var express = require('express');
//var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var _ = require('lodash');
var Sequelize = require('sequelize');
var restful = require('sequelize-restful');
var sequelize = new Sequelize('mysql://localhost:3306/Service_Station','ssadmin','P@ssw0rd');
var DEBUG=1;


//Create the application
var app = express();


//get all the models
app.models = require('./models/index');

// Add Middleware necessary for REST API's
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));

//CORS Support
app.use(function(req, res,next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

//Configure sequelize to work with models
app.configure(function(){app.use(restful(sequelize,{
    endpoint:'/',
    allowed: app.models
        }));
  });

//Load the routes
var routes = require('./routes');
_.each(routes, function(controller,route){
	app.use(route,controller(app,route));    
});


// Connect to MongoDB
mongoose.connect('mongodb://localhost/restapp');
mongoose.connection.once('open', function() {
    console.log('Listening on port 3000...');
    app.listen(3000);
});
