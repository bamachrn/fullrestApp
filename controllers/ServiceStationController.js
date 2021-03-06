var express = require('express');
var router = express.Router();
var fs = require('fs');
var jsonQuery = require('json-query');

module.exports = function (app,sequelize) 
{
    router.route('/')
        .post(function (req, res) {
             var newServiceStation = {
                name: req.body.name,
                address: req.body.address,
                contact_ph: req.body.contact_ph,
                mobile: req.body.mobile,
                email: req.body.email,
                description: req.body.description,
                website: req.body.website,
                logo_path: req.body.logo_path,
                area_id: req.body.area_id,
                brand_id: req.body.brand_id,
                weekly_off_id: req.body.weekly_off_id,
                timing: req.body.timing,
                about_workshop: req.body.about_workshop,
                about_team: req.body.about_team,
                facilities: req.body.facilities,
                ss_type_id: req.body.ss_type_id,
                pick_drop_km: req.body.pick_drop_km,
                latitude: req.body.latitude,
                longitude: req.body.longitude,
                register_time: req.body.registertime,
                verify_time: req.body.verify_time,
                approve_time: req.body.approve_time
            }
            app.models.ServiceStations.create(newServiceStation).then(function () {
                res.redirect('/');
            });
        })
        .get(function (req, res) {
            app.models.ServiceStations.findAll().then(function (service_stations) {
               //getting the service stations json object and removing the sequelize decripition details
               var ss_string = JSON.parse(JSON.stringify(service_stations));

               var areadata = JSON.parse(fs.readFileSync(__dirname+'/../database/areas.json','utf-8')); 
               
               //updating service stations json object for adding the details from id (like area details for area_id)
               for(var i=0;i<service_stations.length;i++)
               {   
                    //adding area details for the specified area_id
                    ss_string[i].area = jsonQuery('areas[id='+service_stations[i].area_id+']',{
                        data:areadata
                    }).value;
                }
              
                //send the modified json obejct in response
                res.json(ss_string);
            })
            .catch(function(err){
                res.send(err);
            });
       });
    router.route('/:service_station_id')
        .get(function(req,res){
            app.models.ServiceStations.find({
                where:{ss_id:req.params.service_station_id}
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
