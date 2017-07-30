var mysql=require('mysql');
var connection=mysql.createPool({
	host:'127.0.0.1',
	user:'root',
	password:'Thavach@r@7am',
	database:'Cricket'
});

var cricketModel={
	getCurrentMatches:function(matchType,matchId,callback){

		if(matchType==='INTERNATIONALS' || matchType==='WOMEN'){
			connection.query('SELECT * from CURRENT_MATCHES WHERE MATCH_TYPE in (select tournament_name from tournament_list where country_name=?)',matchType,callback);
		}
		else if(matchType==='DOMESTIC'){
			connection.query('SELECT CURRENT_MATCHES.*, COUNTRY_NAME from CURRENT_MATCHES INNER JOIN TOURNAMENT_LIST ON CURRENT_MATCHES.MATCH_TYPE=TOURNAMENT_LIST.TOURNAMENT_NAME where TOURNAMENT_LIST.COUNTRY_NAME <>"INTERNATIONALS" and TOURNAMENT_LIST.COUNTRY_NAME <>"WOMEN"',callback);

		}
		else if(matchType==='OTHERS'){
			connection.query('SELECT * from CURRENT_MATCHES WHERE MATCH_TYPE not in (select tournament_name from tournament_list)',callback);

		}
		else if(matchId){
			connection.query('SELECT * from CURRENT_MATCHES where MATCH_ID=?',matchId,callback);
		}
		else{
			connection.query('SELECT * from CURRENT_MATCHES',callback);
		}
	},
	getCurrentScores:function(matchId,callback){

		connection.query('SELECT * from CURRENT_SCORES where MATCH_ID=?',matchId,callback);
		
	}
}
module.exports=cricketModel;