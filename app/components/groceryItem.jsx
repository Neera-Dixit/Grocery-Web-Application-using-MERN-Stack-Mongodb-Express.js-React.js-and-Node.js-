import React from 'react';
import {groceryActions} from '../actions/groceryActions.js';

export class GroceryItem extends React.Component{

	constructor(props){
		super(props);
		this.deleteItem=this.deleteItem.bind(this);
		this.togglePurchase=this.togglePurchase.bind(this);
	}

	deleteItem(){
		groceryActions.deleteItem(this.props.item);
	}

	togglePurchase(){
		if(this.props.item.purchased){
			groceryActions.unbuyItem(this.props.item);
		}
		else{
			groceryActions.buyItem(this.props.item);
		}
	}

	render(){
		return (

			<div>
				<div className={this.props.item.purchased?"purchased":""} style={{display:'inline-block'}}>
					<h3>{this.props.item.name}</h3>
				</div>&nbsp;&nbsp;&nbsp;
				<div style={{display:'inline-block'}}> 
					<button onClick={this.deleteItem}>&times;</button>
				</div>	&nbsp;&nbsp;&nbsp;
				<div style={{display:'inline-block'}}> 
					<button onClick={this.togglePurchase}>{this.props.item.purchased?"Unbuy":"Buy"}</button>
				</div>
			</div>
		);
	}	
}
