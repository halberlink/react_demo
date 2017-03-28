import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import { connect } from 'react-redux';

class LoginLong extends Component{
	render(){
		return (
			<label for="remberme" className="login-long">
				<input type="checkbox" id="remberme"/>
				<span></span>
				一个月内免登录
			</label>
		);
	}
}
export default LoginLong