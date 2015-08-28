var express = require('express');
var router = express.Router();
module.exports = function(app,sequelize)
{
    router.route('/')
        .get(function(req,res){
            app.models.Customers.findAll().then(function(err,customers){
                if(err)
                    res.send(err);
                else
                    res.json(customers);
             
            });
        })
        .post(function(req,res){
            var newCustomer = {
                first_name:req.body.first_name,
                last_name:req.body.last_name,
                mobile:req.body.mobile,
                email:req.body.email,
                gender:req.body.gender,
                password:req.body.password
            }
            //console.log(customer);
            app.models.Customers.create(newCustomer).then(function(customer){
                res.json(customer);
                //console.log(customer);
            });
        });

    router.route('/:cust_id')
        .get(function(req,res){
            app.models.Customers.findById(req.params.cust_id,function(err,customer){
                if(err)
                    res.send(err);
                else
                    res.json(customer);
            });
        })
        .put(function(req,res){
            app.models.Customers.findById(req.params.cust_id,function(err,customer){
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
            app.models.Customers.remove({_id:req.params.cust_id},function(err,customer){
                if(err)
                    res.send(err);
                else
                    res.json(customer);
            });
        })
        .post(function(req,res){
            app.models.Customers.findOne({ where: {email:req.body.email}}).then(function(err,customer){
                if(err)
                    res.send(err);
                else
                    res.send(customer);
            });
        });

    return router;	
}
