var winston=require('winston');

var tsFormat = function(){ return new Date().toLocaleString()};

var logger=new (winston.Logger)({
	transports: [
    // colorize the output to the console
    new (winston.transports.Console)({
      timestamp: tsFormat,
      colorize: true
    }),
    new (winston.transports.File)({
      timestamp: tsFormat,
      filename: __dirname+'/logFile.txt'
    })
  ]
});


module.exports=logger;