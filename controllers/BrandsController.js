var express = require('express');
var router = express.Router();
var fs = require('fs');
var jsonQuery = require('json-query');

module.exports = function (app,sequelize) 
{
    router.route('/')
        .get(function(req,res){
            res.json((JSON.parse(fs.readFileSync(__dirname+'/../database/brands.json','utf-8'))).brands);
        });
    router.route('/:brand_id')
        .get(function(req,res){
            var branddata = JSON.parse(fs.readFileSync(__dirname+'/../database/brands.json','utf-8'));
            res.json(jsonQuery('brands[brand_id='+req.params.brand_id+']',{
                data:branddata
            }).value);
            
        });
        return router;
};
