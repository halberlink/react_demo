import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import { connect } from 'react-redux';


class LoginTitle extends Component{
	render(){
		return (
			<div className="jddl">
				<a onClick={this.context.router.goBack}>
					<i></i>
				</a>
				我的登录
			</div>
		);
	}
}
LoginTitle.contextTypes = {
    router: React.PropTypes.object.isRequired
}
export default LoginTitle