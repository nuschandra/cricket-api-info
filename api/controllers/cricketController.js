'use strict';

var cricketModel=require('../models/cricketModel');

exports.listCurrentMatches=function(req,res){

	cricketModel.getCurrentMatches(req.query.matchType,function(err,results){
		if(err){
			res.send(err);
			console.log('Error');
		}
		else{
			res.json(results);
			console.log(results);
		}
	});
};