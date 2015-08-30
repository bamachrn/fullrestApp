var express = require('express');
var config = require('./config/database.json')["dev"];
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var _ = require('lodash');
var Sequelize = require('sequelize');
var restful = require('sequelize-restful');
var DEBUG=1;
var sequelize = new Sequelize(
        config.database,
        config.user,
        config.password,
        {
            port: config.port,
            host: config.server
        }
        );

//Create the application
var app = express();


//get all the models
app.models = require('./models/index')(sequelize);

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

//Load the routes
var routes = require('./routes');
_.each(routes, function(controller,route){
    app.use(route,controller(app,sequelize));    
});
//Load the frontends
app.use(express.static(__dirname+'/public'));

//Start the server
app.listen(3000,function(err){
    console.log("Server is listening on port 3000...");
});
