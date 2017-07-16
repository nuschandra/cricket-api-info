'use strict';

module.exports=function(app){
	var cricketController=require('../controllers/cricketController');

//	app.route('/currentMatches?')
//		.get(cricketController.listCurrentMatches);

	app.get('/currentMatches?',function(req,res,next){
		if(req.query.matchType!=null){
			cricketController.listCurrentMatchesByType(req.query.matchType);
		}
		else{
			cricketController.listCurrentMatches();
		}
	});
};