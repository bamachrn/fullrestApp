var express = require('express');
var router = express.Router();
var fs = require('fs');
var jsonQuery = require('json-query');
var extend = require('node.extend');

module.exports = function (app,sequelize) 
{
    router.route('/')
        .post(function (req, res) {
             var newServiceBooking = {
                 customer_id: req.body.customer_id,
                 first_name: req.body.first_name,
                 last_name: req.body.last_name,
                 mobile: req.body.mobile,
                 mobile_alt: req.body.mobile_alt,
                 email: req.body.email,
                 address: req.body.address,
                 area_id: req.body.area_id,
                 pincode: req.body.pincode,
                 bike_id: req.body.bike_id,
                 ss_id: req.body.ss_id,
                 is_free_service: req.body.is_free_service,
                 customer_notes: req.body.customer_notes,
                 coupon_id: req.body.coupon_id,
                 bike_running_km: req.body.bike_running_km,
                 is_regular_service: req.body.is_regular_service,
                 service_rating: req.body.service_rating,
                 service_feedback: req.body.service_feedback,
                 job_card_number: req.body.job_card_number,
                 servicing_by: req.body.servicing_by,
                 bill_no: req.body.bill_no,
                 bill_amount: req.body.bill_amount,
                 bill_path: req.body.bill_path,
                 pending_work: req.body.pending_work,
                 ss_recommendation: req.body.ss_recomendation,
                 current_service_status_id: req.body.current_service_status_id,
                 submit_date: req.body.submit_date,
                 booking_date: req.body.booking_date,
                 delivery_date: req.body.delivery_date
            }
            app.models.ServiceBookings.create(newServiceBooking).then(function () {
                res.redirect('/');
            });
        })
        .get(function (req, res) {
            app.models.ServiceBookings.findAll().then(function (service_bookings) {
               //getting the service stations json object and removing the sequelize decripition details
               var sb_string = JSON.parse(JSON.stringify(service_bookings));

               //getting area details from server local file system
               var areadata=JSON.parse(fs.readFileSync(__dirname+'/areas.json','utf-8'));
               
               //updating service stations json object for adding the details from id (like area details for area_id)
               for(var i=0;i<service_bookings.length;i++)
               {   
                    //adding area details for the specified area_id
                    sb_string[i].area = getItemByID(areadata,service_bookings[i].area_id);
                }
              
                //send the modified json obejct in response
                res.json(sb_string);
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
    router.route('/:booking_id')
        .get(function(req,res){
            app.models.ServiceBookings.find({
                where:{id:req.params.booking_id}
                })
                .then(function(service_booking){
                    res.json(service_booking);
                })
                .catch(function(err){
                    res.send(err);
                });
        })
        .put(function(req,res){
            app.models.ServiceBookings.update(
                {
                    name: req.body.name
                },
                {
                   id:req.params.booking_id
                }
            )
            .then(function(service_booking){
                res.json(service_booking);
            })
            .catch(function(err){
                res.send(err);
            });
        })
        .delete(function(req,res){
            app.models.ServiceBookings.destroy({
                    where: {id:req.params.booking_id}
            })
            .then(function(service_booking){
                res.json(service_booking);
            })
            .catch(function(err){
                res.send(err);
            });
        });
        
        return router;
};
