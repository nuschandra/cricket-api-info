'use strict';

var cricketModel=require('../models/cricketModel');

exports.listCurrentMatches=function(req,res){

	cricketModel.getCurrentMatches(req.query.matchType,req.query.id,function(err,results){
		if(err){
			res.send(err);
			console.log(err);
			console.log('Error');
		}
		else{
			res.json(results);
			console.log(results);
		}
	});
};

exports.currentScore=function(req,res){
	if(!req.query.id){
		res.status(400);
		res.send(JSON.stringify({"Error":"Match ID not present"}));
	}
	else{
		var ScoresArray=[]
		var Scores={}
		var matchId='matchId'
		var matchStatus='matchStatus'
		var teamScores='teamScores'
		Scores[teamScores]={}
		var teamOne='teamOne'
		var teamTwo='teamTwo'
		var batsmen='batsmen'
		var bowlers='bowlers'
		var match='match'
		Scores[batsmen]=[]
		Scores[bowlers]=[]
		cricketModel.getCurrentMatches(req.query.matchType,req.query.id,function(err,results){
			if(err){
				res.send(err);
				console.log(err);
				console.log('Error');
			}
			else{
				var stringify=JSON.stringify(results);
				var results=JSON.parse(stringify);
				Scores[matchStatus]=results[0]["MATCH_STATUS"];
				Scores[match]=results[0]["TEAM_1"] + ' v ' + results[0]["TEAM_2"] + ", " + results[0]["MATCH_DETAILS"]
			}
		});
		cricketModel.getCurrentScores(req.query.id,function(err,results){
			if(err){
				res.send(err);
				console.log(err);
				console.log('Error');
			}
			else{
				var stringify=JSON.stringify(results)
				var results=JSON.parse(stringify)
				Scores[matchId]=req.query.id;
				Scores[teamScores][teamOne]=results[0]["TEAM_ONE_SCORE"];
				Scores[teamScores][teamTwo]=results[0]["TEAM_TWO_SCORE"];
				var batsmenOne={
					batsmanName:results[0]["BATSMAN_ONE_NAME"],
					batsmanScore:results[0]["BATSMAN_ONE_SCORE"],
					batsmanBoundaries:results[0]["BATSMAN_ONE_BOUNDARIES"],
					batsmanStrikeRate:results[0]["BATSMAN_ONE_SR"]
				};
				var batsmenTwo={
					batsmanName:results[0]["BATSMAN_TWO_NAME"],
					batsmanScore:results[0]["BATSMAN_TWO_SCORE"],
					batsmanBoundaries:results[0]["BATSMAN_TWO_BOUNDARIES"],
					batsmanStrikeRate:results[0]["BATSMAN_TWO_SR"]
				};
				var bowlerOne={
					bowlerName:results[0]["BOWLER_ONE_NAME"],
					bowlerOvers:results[0]["BOWLER_ONE_OVERS"],
					bowlerMaidens:results[0]["BOWLER_ONE_MAIDENS"],
					bowlerRuns:results[0]["BOWLER_ONE_RUNS"],
					bowlerWickets:results[0]["BOWLER_ONE_WICKETS"],
					bowlerEconomy:results[0]["BOWLER_ONE_ECO"]
				};
				var bowlerTwo={
					bowlerName:results[0]["BOWLER_TWO_NAME"],
					bowlerOvers:results[0]["BOWLER_TWO_OVERS"],
					bowlerMaidens:results[0]["BOWLER_TWO_MAIDENS"],
					bowlerRuns:results[0]["BOWLER_TWO_RUNS"],
					bowlerWickets:results[0]["BOWLER_TWO_WICKETS"],
					bowlerEconomy:results[0]["BOWLER_TWO_ECO"]
				};
				Scores[batsmen].push(batsmenOne);
				Scores[batsmen].push(batsmenTwo);
				Scores[bowlers].push(bowlerOne);
				Scores[bowlers].push(bowlerTwo);
				ScoresArray.push(Scores)
				var scoreJson=JSON.stringify(ScoresArray);
				res.send(scoreJson);
			}
		});
	}
};