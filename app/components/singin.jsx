import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import tools from '../js/tools';

class SignTitle extends Component{
	render(){
		return (
			<div className="jddl">
				<a onClick={this.context.router.goBack}>
					<i></i>
				</a>
				我的注册
			</div>
		);
	}
}
SignTitle.contextTypes = {
    router: React.PropTypes.object.isRequired
}

class Username extends Component{
	render(){
		return (
			<div>	
			<input type="text" placeholder="请输入8-20个字母及数字组合" id="username" autoFocus/>
			</div>
		);
	}
}
class Userps extends Component{
	render(){
		return (
			<div>
			<input type="password" placeholder="请设置6-20位登录密码" id="password"/>
			</div>
		);
	}
}
class Psrepeat extends Component{
	render(){
		return (
			<div>
			<input type="password" placeholder="重复密码" id="password-repeat"/>
			</div>
		);
	}
}

class CheckMessage extends Component{
	constructor(props){
		super(props);
	}
	render(){
		let show=this.props.isShow?"show":"hidden";
		let clsname="check-message "+show;
		return (
			<div className={clsname}>
				{this.props.message}
			</div>	
		);
	}
}

class Userinfo extends Component{
	constructor(props){
		super(props);
		this.state={
			message:'',
			isShow:false
		}
	}
	render(){
		return (
			<div className="user-box">
				<Username/>
				<Userps/>
				<Psrepeat/>
				<CheckMessage message={this.state.message} isShow={this.state.isShow}/>
			</div>
		);
	}
	componentDidMount(){
		let btn=document.getElementById('singButton');
		var _this=this;
		btn.addEventListener('click',function(){
			let username=document.getElementById('username').value;
			let password=document.getElementById('password').value;
			let psdrepeat=document.getElementById('password-repeat').value;
			if(!tools.checkLength(username,8,20)||!tools.checkLength(password,6,20)){
				console.log("长度不合符");
				_this.setState({message:'长度不符合',isShow:true});
				return;
			}
			if(!tools.checkCn(username)||!tools.checkCn(password)){
				console.log("含有中文字符");
				_this.setState({message:'含有中文字符',isShow:true});
				return;
			}if(password!=psdrepeat){
				console.log('两次输入不一致');
				_this.setState({message:'两次输入不一致',isShow:true});
				return;
			}	
			fetch('/user/sign',{
				method:'POST',
				headers:{
					"Content-Type":"json"
				},
				body:"username="+username+"&password="+password
			}).then(function(res){
				console.log(res.text());
				alert("注册成功");
				_this.context.router.goBack();
			});
		});
	};
}
Userinfo.contextTypes = {
    router: React.PropTypes.object.isRequired
}

class SingButton extends Component{
	render(){
		return (
			<button id="singButton">
				注册
			</button>
		);
	}

}



class Singin extends Component{
	render(){
		return (
			<div className="sing-in">
				<SignTitle/>
				<Userinfo/>
				<SingButton/>
			</div>
		);
	}
}

export default Singin