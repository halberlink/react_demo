import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';


class Fxtit extends Component{
	render(){
		return (
			<div className="sh-head">
				<a onClick={this.context.router.goBack}><i></i></a>
				<span>发现频道</span>
				<div className="sh-btn">
					<i></i>
				</div>
			</div>
		);
	}
}

class Fxnav extends Component{
	render(){
		return (
			<div className="fx-nav">
				<div>
				<span className="on active">精选</span>
				<span>车牌号</span>
				<span>型男志</span>
				<span>爱搞机</span>
				<span>生活家</span>
				<span>女神苑</span>
				<span>亲子园</span>
				<span>数码控</span>
				<span>文艺咖</span>
				<span>理财师</span>
				<span>吃货党</span>
				<span>品牌街</span>
				<span>家居馆</span>
				</div>
				<i></i>
			</div>
		);
	}
}

Fxtit.contextTypes = {
    router: React.PropTypes.object.isRequired
}

class Fxcon extends Component{
	render(){
		return (
			<div className="fxcon">
				<Fxitem/>
			</div>
		);
	}
}

class Fxitem extends Component{
	render(){
		return (
			<div className="fx-item">
				<div className="fx-text">
					<p>【智友实评】柔光双摄 vivo X9柔在哪里？</p>
					<p>当全行业都在宣传自己的后置双摄黑科技的时候，VIVO却后发之人</p>
					<p><i></i>智能帮</p>
				</div>
				<div className="fx-img">
					<div className="img-box">
					<img src="/app/images/fx1.jpg"/>
					</div>
					<div className="img-con">
						<span><i className="i1"></i>01月20日</span>
						<span><i className="i2"></i>4156</span>
					</div>
				</div>
			</div>
		);
	}
}

class Faxian extends Component{
	render(){
		return (
			<div className="fx-wrap">
				<Fxtit/>		
				<Fxnav/>
				<Fxcon/>		
			</div>
		);
	}
}

export default Faxian