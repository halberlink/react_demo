import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';


export class Header extends Component{
	constructor(props){
		super(props);
	}
	render(){
		var User=localStorage.User?<div id="login-out" className="head-son right">{localStorage.User.substring(0,3)}</div>:<Link to="login" activeClassName="right" className="right">登录</Link>;
		return(
			<div className="header">
				<Link to="/reduxtest" activeClassName="left">
					<div  className="logo-wrap">
						<i style={{color:'#fff'}}>redux demo</i>
					</div>
				</Link>
				<form className="center">
					<div>
					<i></i>
					<input type="text" placeholder="pc请使用开发者模式查看"/>
					</div>
				</form>
				{User}
			</div>
		);
	}
	componentDidMount(){
		let _this=this;
		if(localStorage.User){
			_this.forceUpdate();
			alert("欢迎您"+localStorage.User);
		}
		let loginOut=document.getElementById('login-out');
		if(loginOut){
		loginOut.addEventListener('click',()=>{
			localStorage.removeItem('User');
			_this.forceUpdate();
		});
		}
	};
}
export class Footer extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div className="footer">
				<Link to="/"><img src="/app/images/index-1.png"/></Link>

				<Link to="fenlei"><img src="/app/images/index-2.png"/></Link>

				<Link to="faxian"><img src="/app/images/index-3.png"/></Link>

				<Link to="shopcar"><img src="/app/images/index-4.png"/></Link>

				<Link to="/"><img src="/app/images/index-5.png"/></Link>
			</div>
		);
	}
}