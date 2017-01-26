var mongoose=require('mongoose');
var schema=mongoose.Schema;

var groceryMongoose=function(logger){

mongoose.connection.on('connected',function(){
	logger.info("Connected to mongo DB");
	console.log("Connected to mongo DB");
});

mongoose.connection.on('disconnected',function(){
	logger.info("Disconnected to mongo DB");
	console.log("Disconnected to mongo DB");
});

mongoose.connection.on('error',function(){
	logger.error("Error Connecting to mongo DB");
	console.log("Error Connecting to mongo DB");
});

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/Grocery");

var groceryModel=new schema({
 name:String,
 purchased:Boolean,
 id:String
});

var groceryData=mongoose.model('groceryData',groceryModel);

return groceryData;

}


module.exports=groceryMongoose;

