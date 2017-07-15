var mysql=require('mysql');
var connection=mysql.createPool({
	host:'localhost',
	user:'root',
	password:'Thavach@r@7am',
	database:'Cricket'
});

var cricketModel={
	getCurrentMatches:function(callback){
		connection.query('SELECT * from CURRENT_MATCHES',callback);
	}
}
module.exports=cricketModel;