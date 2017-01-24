var mongoose=require('mongoose');
var schema=mongoose.Schema;

mongoose.connection.on('connected',function(){
	console.log("Connected to mongo DB");
});

mongoose.connection.on('disconnected',function(){
	console.log("Disconnected to mongo DB");
});

mongoose.connection.on('error',function(){
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

module.exports=groceryData;

