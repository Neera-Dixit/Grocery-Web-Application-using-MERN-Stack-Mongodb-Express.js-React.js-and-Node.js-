var express=require('express');
var router=express.Router();

var itemRoutes=function(groceryData,logger){

	router.route('/:id')
	.delete(function(req,res){
		groceryData.findById(req.params.id,function(err,data){
			if(data){

				 data.remove(function(err,data){
					if(err){
						logger.error(err);
						res.status(500).send("Error fecthing Data");
					}
					else{
						res.status(200).send("Data delted successfully");
					}
				});
			}

			if(err){
				logger.error(err);
				res.status(404).send("Record Not Found");
			}
			
		});
	})
	.patch(function(req,res){
		groceryData.findById(req.params.id,function(err,data){

			if(data){
			 for(var key in req.body){
				 	data[key]=req.body[key];
				 }
				data.save();
			}

			if(err){
				logger.error(err);
				res.status(404).send("Record Not Found");
			}
			
		});
	});

	router.route('/fetch')
	.get(function(req,res){
		groceryData.find({},function(err,data){
			if(err){
				logger.error(err);
				res.status(500).send("Error fecthing Data");
			}

			if(data){
				res.status(200).json(data);
			}
		});
		
	})
	.post(function(req,res){
		var item=req.body;
		new groceryData(item).save(function(err,data){
			if(err){
				logger.error(err);
				res.status(500).send("Error Insering Data");
			}

			if(data){
				res.status(200);
			}
		})

	});

	return router;
}	

module.exports=itemRoutes; 
