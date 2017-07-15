var express=require('express'),
	app=express(),
	port=process.env.PORT||3000,
	bodyParser=require('body-parser');

var model=require('./api/models/cricketModel');
app.use(bodyParser.json());

var routes=require('./api/routes/cricketRoutes');
routes(app);

app.listen(port);
console.log('Cricket API running on port 3000!');



