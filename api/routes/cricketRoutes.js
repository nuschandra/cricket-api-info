'use strict';

module.exports=function(app){
	var cricketController=require('../controllers/cricketController');

	app.route('/currentMatches?')
		.get(cricketController.listCurrentMatches);

	app.route('/currentScores?')
		.get(cricketController.currentScore);
};