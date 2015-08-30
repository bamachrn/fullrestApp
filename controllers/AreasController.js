var express = require('express');
var router = express.Router();
var fs = require('fs');
var jsonQuery = require('json-query');

module.exports = function (app,sequelize) 
{
    router.route('/')
        .get(function(req,res){
            res.json((JSON.parse(fs.readFileSync(__dirname+'/../database/areas.json','utf-8'))).areas);
        });
    router.route('/:area_id')
        .get(function(req,res){
            var areadata = JSON.parse(fs.readFileSync(__dirname+'/../database/areas.json','utf-8'));
            res.json(jsonQuery('areas[id='+req.params.area_id+']',{
                data:areadata
            }).value);
            
        });
        return router;
};
