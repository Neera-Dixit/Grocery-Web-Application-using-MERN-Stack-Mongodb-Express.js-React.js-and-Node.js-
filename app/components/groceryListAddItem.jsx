import React from 'react';
import {groceryActions} from '../actions/groceryActions.js';

export class GroceryListAddItem extends React.Component{

	constructor(props){
		super(props);
		this.state={
			value:"addItem"
		};
		this.handleChange=this.handleChange.bind(this);
		this.addItem=this.addItem.bind(this);
	}

	handleChange(e){
		this.setState({value:e.target.value});
	}

	addItem(e){
		e.preventDefault();
		groceryActions.addItem(this.state.value);
	}

	render(){
		return (
			<div className="grocery-addItem">	
			  <form onSubmit={this.addItem}>
				<input type="text" value={this.state.value} onChange={this.handleChange}/>
				<button>Add Item</button>
			  </form>
			</div>
		);
	}	
}
