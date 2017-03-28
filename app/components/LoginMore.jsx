import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import { connect } from 'react-redux';

class LoginMore extends Component{
	render(){
		return (
			<div className="login-more">
				<div className="more-tit">
					<p>其他登录方式</p>
			    </div>
			    <a>
			    	<i className="i1"></i>
			    	QQ
			    </a>
			    <a>
			    	<i className="i2"></i>
			    	微信
			    </a>
			</div>
		);
	}
}
export default LoginMore