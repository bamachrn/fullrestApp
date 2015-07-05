var express = require('express');
var router = express.Router();
module.exports = function(app,uri)
{
    router.route('/')
        .get(function(req,res){
            app.models.Customer.find(function(err,customers){
                if(err)
                    res.send(err);
                else
                    res.json(customers);
             
            });
        })
        .post(function(req,res){
            var customer = new app.models.Customer();
            customer.first_name = req.body.first_name;
            customer.last_name  = req.body.last_name;
            customer.mobile_no  = req.body.mobile_no;
            console.log(customer);
            customer.save(function(err,customer){
                if(err)
                    res.send(err);
                else
                    res.json(customer);
            });
        });

    router.route('/:cust_id')
        .get(function(req,res){
            app.models.Customer.findById(req.params.cust_id,function(err,customer){
                if(err)
                    res.send(err);
                else
                    res.json(customer);
            });
        })
        .put(function(req,res){
            app.models.Customer.findById(req.params.cust_id,function(err,customer){
                if(err)
                    res.send(err);
                customer.first_name = req.body.first_name;
                customer.save(function(err,customer){
                    if(err)
                        res.send(err);
                    else
                        res.json(customer);
                });
            });
        })
        .delete(function(req,res){
            app.models.Customer.remove({_id:req.params.cust_id},function(err,customer){
                if(err)
                    res.send(err);
                else
                    res.json(customer);
            });
        });

    return router;	
}
