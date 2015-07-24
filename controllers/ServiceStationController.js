var express = require('express');
var router = express.Router();
var fs = require('fs');
var jsonQuery = require('json-query');
var extend = require('node.extend');

module.exports = function (app,sequelize) 
{
    router.route('/')
        .post(function (req, res) {
             var newServiceStation = {
                name: req.body.name,
                address: req.body.address,
                contact_no: req.body.contact_no,
                email: req.body.email,
                description: req.body.description,
                siteaddress: req.body.siteaddress,
                logopath: req.body.logopath,
                area_id: req.body.area_id,
                brand_id: req.body.brand_id,
                weekly_off_code: req.body.weekly_off_code,
                ss_timing: req.body.ss_timing,
                ss_associate_id: req.body.ss_associate_id,
                about_workshop: req.body.about_workshop,
                about_team: req.body.about_team,
                features_list: req.body.features_list,
                latitude: req.body.latitude,
                longitude: req.body.longitude,
                ss_type_code: req.body.ss_type_code,
                pick_drop_km: req.body.pick_drop_km,
                facilities: req.body.facilities,
                registertime: req.body.registertime,
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

               //getting area details from server local file system
               var areadata=JSON.parse(fs.readFileSync(__dirname+'/areas.json','utf-8'));
               
               //updating service stations json object for adding the details from id (like area details for area_id)
               for(var i=0;i<service_stations.length;i++)
               {   
                    //adding area details for the specified area_id
                    ss_string[i].area = getItemByID(areadata,service_stations[i].area_id);
                }
              
                //send the modified json obejct in response
                res.json(ss_string);
            })
            .catch(function(err){
                res.send(err);
            });
       });
    function getItemByID(searchObject,search_id)
    {
       return jsonQuery('areas[id='+search_id+']',{
            //here data means the object where query has to be run.
            //here areas id is being queried in areadata json object
            data: searchObject
        }).value;
    }
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
