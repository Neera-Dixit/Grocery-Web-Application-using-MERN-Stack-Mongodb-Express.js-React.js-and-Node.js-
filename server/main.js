var express=require('express');
var app=express();
var bodyParser=require('body-parser');
var port=process.env.PORT || 9045;
var logger=require('./logger/logConfig.js');
var router=express.Router();
var groceryData=require('./util/db_util.js')(logger);
var itemRoutes=require('./routes/itemRoutes.js')(groceryData,logger);

app.use(express.static(__dirname+'/../build'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
    app.use(require('winston-request-logger').create(logger,{
        'responseTime': ':responseTime ms',		
        'url': ':url[pathname]',
        'Request Method':':method',
        'Ip':':ip',
        'User-Agent':':userAgent'

    }));

app.use('/items',itemRoutes);

app.get('/',function(req,res){
	
	res.render('../app/index.ejs',{});	
});

app.listen(port,function(){
	console.log("http Server Listeneing at : ",port);
});

