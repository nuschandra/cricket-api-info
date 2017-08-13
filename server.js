var express=require('express'),
	app=express(),
	cors=require('cors'),
	port=process.env.PORT||3000,
	bodyParser=require('body-parser');

app.set('view engine','ejs')
var model=require('./api/models/cricketModel');
app.use(bodyParser.json());
app.use(cors());

var routes=require('./api/routes/cricketRoutes');
routes(app);

app.listen(port);
console.log('Cricket API running on port 3000!');



