var mysql=require('mysql');
var connection=mysql.createPool({
	host:'us-cdbr-iron-east-03.cleardb.net',
	user:'b1ffd2fe23b05d',
	password:'efd23b14',
	database:'heroku_2202757061fad82'
});

var cricketModel={
	getCurrentMatches:function(matchType,callback){
		console.log(matchType);
		if(matchType==='internationals'){
			connection.query('SELECT * from CURRENT_MATCHES WHERE MATCH_TYPE in (select tournament_name from tournament_list where country_name=?)',matchType,callback);
		}
		else{
			connection.query('SELECT * from CURRENT_MATCHES',callback);

		}
	}
}
module.exports=cricketModel;