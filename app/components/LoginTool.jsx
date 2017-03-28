import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import { connect } from 'react-redux';

class LoginTool extends Component{
	render(){
		return (
			<div className="login-tool">
				<div>
					<span className="s1"></span>
					找回密码
				</div>
				<div>
				
					<span className="s2"></span>
				<Link to="singin">	
					快速注册
				</Link>	
				</div>
			</div>
		);
	}
}
export default LoginTool