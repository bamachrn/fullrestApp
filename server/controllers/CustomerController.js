var restful = require('node-restful');

module.exports = function(app,route){
    
    //setup the controller for rest
    var rest = restful.model(
        'Customer',app.models.Customer
        ).methods(['get','put','post','delete']);
    
    //Register this end point with the application
    rest.register(app,route);

    //return the middleware
    return function(req,res,next){
        next();
    };
}
