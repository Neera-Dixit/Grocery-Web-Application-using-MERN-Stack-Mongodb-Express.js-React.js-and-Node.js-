import Dispatcher from '../dispatcher/appDispatcher.js';

export var groceryActions= {
	addItem : function(item){
		Dispatcher.dispatch({
			actionType: "addItem",
			item
		});
	},
	deleteItem : function(item){
		Dispatcher.dispatch({
			actionType: "deleteItem",
			item
		});
	},
	buyItem : function(item){
		Dispatcher.dispatch({
			actionType: "buyItem",
			item
		});
	},
	unbuyItem: function(item){
		Dispatcher.dispatch({
			actionType: "unbuyItem",
			item
		});
	}
}