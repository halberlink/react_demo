import React,{ Component, PropTypes } from 'react';
import ReactDOM, { render } from 'react-dom';
import { connect } from 'react-redux'

class ListItem extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
			<li>
				<div>
					<img src={this.props.src}/>
					<p>{this.props.text}</p>
					<p>{this.props.price}</p>
				</div>	
			</li>
		);
	}
}
export default ListItem;