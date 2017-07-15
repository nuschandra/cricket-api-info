var mysql=require('mysql');
var connection=mysql.createPool({
	host:'localhost',
	user:'b1ffd2fe23b05d',
	password:'efd23b14',
	database:'heroku_2202757061fad82'
});

var cricketModel={
	getCurrentMatches:function(callback){
		connection.query('SELECT * from CURRENT_MATCHES',callback);
	}
}
module.exports=cricketModel;