import React from 'react';
import {GroceryItem} from './groceryItem.jsx';
import {GroceryListAddItem} from './groceryListAddItem.jsx';
import {groceryItemStore} from '../stores/GroceryItemStore.js';

export class GroceryItemList extends React.Component{
	
	constructor(){
		super();
		this.state={items:groceryItemStore.getItems()};		
	}

	componentWillMount(){
		groceryItemStore.on('change',this.getGroceryItems.bind(this));
	}

	componentWillUnmount(){
		groceryItemStore.removeListener('change',this.getGroceryItems);
	}

	getGroceryItems(){
		this.setState({items:groceryItemStore.getItems()});
	}

	render(){

	 const items=this.state.items.map((item,index,items)=>{
	 	return <GroceryItem key={`item${index}`} item={item}/>;
	 });


		return (
			<div>
			 <h1>Grocery List</h1>
				{items}
			 <hr/>
			 <GroceryListAddItem/>
			</div>

		);
	}
}

