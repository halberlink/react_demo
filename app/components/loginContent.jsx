import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import { connect } from 'react-redux';
import tools from '../js/tools';

class LoginName extends Component{
	render(){
		return (
			<div  className="login-text">
				<input type="text" id="loginname" placeholder="用户名/邮箱/已验证手机"/>
			</div>
		);
	}
}
class LoginPs extends Component{
	render(){
		return (
			<div  className="login-text">
				<input type="text" id="loginps" placeholder="请输入密码"/>
				<div className="check-box">
				</div>
			</div>
		);
	}
}
class LoginCheck extends Component{
	render(){
		return (
			<div className="login-text">
				<input type="text" placeholder="请输入验证码"/>
				<span>
					<img src="/app/images/check.png"/>
				</span>
			</div>	
		);
	}
}

class LoginBtn extends Component{
	render(){
		return (
			<button className="login-btn" id="loginBtn">
			登录
			</button>
		);
	}
}

class LoginContent extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
			<div className="login-content">
				<LoginName/>
				<LoginPs/>
				<LoginCheck/>
				<LoginBtn/>
			</div>
		);
	}
	componentDidMount(){
		let btn1=document.getElementById('loginBtn');
		let _this=this;
		btn1.addEventListener('click',()=>{
			let username=document.getElementById('loginname').value;
			let password=document.getElementById('loginps').value;
			fetch('/user/loginUser',{
				method:"POST",
				headers:{
					"Content-Type":"json"
				},
				body:"username="+username+"&password="+password
			}).then(function(res){
				return res.json(); 
			}).then(function(data){
				if(data.loginSuccess){
					_this.context.router.push('/');
					localStorage.User=data.username;	
				}else{
					alert(data.message);
					document.getElementById('loginname').value='';
					document.getElementById('loginps').value='';
				}
			})
		});
	}
}
LoginContent.contextTypes = {
    router: React.PropTypes.object.isRequired
}
export default LoginContent