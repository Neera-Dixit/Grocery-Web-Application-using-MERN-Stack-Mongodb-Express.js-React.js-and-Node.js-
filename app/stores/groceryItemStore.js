 import Dispatcher from '../dispatcher/appDispatcher.js';
 import {EventEmitter} from 'events';
 import restHelper from '../helpers/restHelper.js';

 class GroceryItemStore extends EventEmitter{

 	constructor(){
 		super();
 		this.items=[];

 		this.fetchItemsFromDb=this.fetchItemsFromDb.bind(this);
		this.setGroceryItembrought=this.setGroceryItembrought.bind(this);
		this.fetchItemsFromDb();
 	}

 	fetchItemsFromDb(){
 		restHelper.get('items/fetch')
		   .then((data)=>{
		   		this.items=data;
		   		this.emit("change");
		   })
		   .catch(function(err){
		   		console.log(err);
		   });
 	}

 	getItems(){
 		return this.items;
 	}

 	addItem(item){
 		var itemObj={name : item,purchased : true}
 		//this.items.push(itemObj);
 		restHelper.post('items/fetch',itemObj);
 		this.fetchItemsFromDb();
 	}

 	deleteItem(item){
 		this.items=this.items.filter(
 			(curItem,index,arr)=>{ return (curItem._id!==item._id)?true:false;}
 			);
 		this.emit("change");
 		restHelper.del(`items/${item._id}`)
 		.then((data)=>{
		   		console.log(data)
		   })
		   .catch(function(err){
		   		console.log(err);
		   });
 		
 	}

 	setGroceryItembrought(item,status){
 		var itemObj;
 		this.items=this.items.filter(
 			(curItem,index,arr)=>{ 
 				if(curItem.name===item.name){
 					curItem.purchased=status;
 					restHelper.patch(`items/${curItem._id}`,curItem);
 				}

 				return true;
 			});

 		this.emit("change");
 	}

 	groceryItemStoreListener(action){
 		//console.log(action);
 		switch(action.actionType){

 			case "addItem" : {
 				this.addItem(action.item);
 				break;
 			}

 			case "deleteItem" : {
 				this.deleteItem(action.item);
 				break;
 			}

 			case "buyItem" : {
 				this.setGroceryItembrought(action.item,true);
 				break;
 			}

 			case "unbuyItem" : {
 				this.setGroceryItembrought(action.item,false);
 				break;
 			}
 		}
 	}
 }

 var groceryItemStore = new GroceryItemStore();
 Dispatcher.register(groceryItemStore.groceryItemStoreListener.bind(groceryItemStore));

 export {groceryItemStore};