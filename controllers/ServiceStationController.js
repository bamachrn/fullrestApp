var express = require('express');
var router = express.Router();

module.exports = function (app,sequelize) 
{
    router.route('/')
        .post(function (req, res) {
             var newServiceStation = {
                name: req.body.name,
                address: req.body.address
            }
            app.models.ServiceStations.create(newServiceStation).then(function () {
                res.redirect('/');
            });
        })
        .get(function (req, res) {
            app.models.ServiceStations.findAll().then(function (service_stations) {
                res.json(service_stations);
            })
            .catch(function(err){
                res.send(err);
            });
       });
    router.route('/:service_station_id')
        .get(function(req,res){
            app.models.ServiceStations.find({
                where:{id:req.params.service_station_id}
                })
                .then(function(service_station){
                    res.json(service_station);
                })
                .catch(function(err){
                    res.send(err);
                });
        })
        .put(function(req,res){
            app.models.ServiceStations.update(
                {
                    name: req.body.name
                },
                {
                   id:req.params.service_station_id
                }
            )
            .then(function(service_station){
                res.json(service_station);
            })
            .catch(function(err){
                res.send(err);
            });
        })
        .delete(function(req,res){
            app.models.ServiceStations.destroy({
                    where: {id:req.params.service_station_id}
            })
            .then(function(service_station){
                res.json(service_station);
            })
            .catch(function(err){
                res.send(err);
            });
        });
        
        return router;
};
