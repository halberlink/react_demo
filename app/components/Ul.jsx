import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ListItem from "./ListItem";

class Main extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
			<ul>
				{
					this.props.list.map((item)=>{

					return <ListItem key={item.id} {...item}/>
					
				 })
				}	     
			</ul>
		);
	}
}
const maptoProps=(state)=>{
	return{
		list:state.list
	}
}
export default connect(maptoProps)(Main);
