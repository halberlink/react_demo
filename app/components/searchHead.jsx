import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import { connect } from 'react-redux';


class SearchHead extends Component{
	render(){
		return (
			<div className="sh-head">
				<a onClick={this.context.router.goBack}><i></i></a>
				<input type="text"/>
				<div className="sh-btn">
					<i></i>
				</div>
			</div>
		);
	}
}

export default SearchHead



SearchHead.contextTypes = {
    router: React.PropTypes.object.isRequired
}