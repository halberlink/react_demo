import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import { connect } from 'react-redux';
import LoginTitle from './loginTitle';
import LoginContent from './loginContent';
import LoginLong from './loginLong';
import LoginTool from './LoginTool';
import LoginMore from './LoginMore';
class LoginUser extends Component{
	constructor(props){
		super(props);
		this.state={
			num:1
		}
	}
	render(){
		return (
			<div className="bg">
				<div id="tishi2" className="tishi2 hidden">
			 	<p>可点击注册 注册成功可登录</p>
			 	<div className="bottom-box"></div>
			 </div>
				<LoginTitle/>
				<div className="loginBg">
					<LoginContent/>
					<LoginTool/>
					<LoginMore/>
				</div>
			</div>
		);
	}
	componentDidMount(){
		if(window.num==1){
			let _this=this;
			let box=document.getElementById('tishi2');
			let cls=box.className;
			cls=cls.replace('hidden','show');
			box.className=cls;
			setTimeout(function(){
			let cls=box.className;
			cls=cls.replace('show','hidden');
			box.className=cls;
			_this.setState({num:2});
			window.num++;
			},2000);
		}
	}
}
export default LoginUser