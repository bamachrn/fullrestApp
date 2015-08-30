var express = require('express');
var router = express.Router();
var fs = require('fs');
var jsonQuery = require('json-query');
var extend = require('node.extend');

module.exports = function (app,sequelize) 
{
    router.route('/')
        .post(function (req, res) {
            var newCustomerBike = {
                customer_id: req.body.customer_id,
                brand_id: req.body.brand_id,
                model_name: req.body.model_name,
                bike_number: req.body.bike_number,
                purchase_year: req.body.purchase_year,
                photo_path: req.body.photo_path,
                puc_date: req.body.puc_date,
                should_remind_puc: req.body.should_remind_puc,
                insurance_expiry:req.body.insurance_expiry,
                should_remind_insurance: req.body.should_remind_insurance
            }
            app.models.CustomerBikes.create(newCustomerBike).then(function () {
                res.redirect('/');
            });
        })
        .get(function (req, res) {
            app.models.CustomerBikes.findAll().then(function (customer_bikes) {
               //getting the customer bikes json object and removing the sequelize decripition details
               var bike_string = JSON.parse(JSON.stringify(service_stations));

               //getting brand details from server local file system
               var branddata=JSON.parse(fs.readFileSync(__dirname+'/brands.json','utf-8'));
               
               //updating customer bikes json object for adding the details from id (like brand details for brand_id)
               for(var i=0;i<service_stations.length;i++)
               {   
                    //adding area details for the specified area_id
                    bike_string[i].brand = getItemByID(branddata,customer_bikes[i].brand_id);
                }
              
                //send the modified json obejct in response
                res.json(bike_string);
            })
            .catch(function(err){
                res.send(err);
            });
       });
    
    function getItemByID(searchObject,search_id)
    {
       return jsonQuery('brands[brand_id='+search_id+']',{
            //here data means the object where query has to be run.
            //here brands id is being queried in branddata json object
            data: searchObject
        }).value;
    }
    
    router.route('/:bike_id')
        .get(function(req,res){
            app.models.CustomerBikes.find({
                where:{bike_id:req.params.bike_id}
                })
                .then(function(customer_bike){
                    res.json(customer_bike);
                })
                .catch(function(err){
                    res.send(err);
                });
        })
        .put(function(req,res){
            app.models.CustomerBikes.update(
                {
                    purchase_year: req.body.purchase_year,
                    photo_path: req.body.photo_path,
                    puc_date: req.body.puc_date,
                    should_remind_puc: req.body.should_remind_puc,
                    insurance_expiry: req.body.insurance_expiry,
                    should_remind_insurance: req.body.should_remind_insurance
                },
                {
                   bike_id:req.params.bike_id
                }
            )
            .then(function(customer_bike){
                res.json(customer_bike);
            })
            .catch(function(err){
                res.send(err);
            });
        })
        .delete(function(req,res){
            app.models.CustomerBikes.destroy({
                    where: {bike_id:req.params.bike_id}
            })
            .then(function(customer_bike){
                res.json(customer_bike);
            })
            .catch(function(err){
                res.send(err);
            });
        });
       
    router.route('/brands')
        .get(function(req,res){
            var branddata=JSON.parse(fs.readFileSync(__dirname+'/brands.json','utf-8'));
            console.log(branddata);
            res.json(branddata);
        });
    router.route('/brands/:brand_id')
        .get();
        return router;
};
