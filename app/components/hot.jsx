import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import { connect } from 'react-redux';
class Zctj extends Component{
	render(){
		return (
			<div className="zctj">
				<p>专场推荐</p>
				<div className="tj-content">
					<div className="con-item">
						<img src="/app/images/tj1.jpg"/>
						<p>自营家电</p>	
					</div>
				</div>
			</div>
		);
	}
}

class Rmfl extends Component{
	render(){
		return (
			<div className="rmfl">
				<div className="rmfl-tit">
					<p>热门分类</p>
					<div>
						<i className="ic1"></i>
						<span>排行榜</span>
						<i className="ic2"></i>
					</div>
				</div>
				<div className="rmfl-content">
					<div>
						<img src="/app/images/tj2.jpg"/>
						<span>手机</span>
					</div>
					<div>
						<img src="/app/images/tj3.jpg"/>
						<span>笔记本</span>
					</div>
					<div>
						<img src="/app/images/tj4.jpg"/>
						<span>空调</span>
					</div>
					<div>
						<img src="/app/images/tj5.jpg"/>
						<span>收纳用品</span>
					</div>
					<div>
						<img src="/app/images/tj6.jpg"/>
						<span>炒锅</span>
					</div>
					<div>
						<img src="/app/images/tj7.jpg"/>
						<span>啤酒</span>
					</div>
					<div>
						<img src="/app/images/tj8.jpg"/>
						<span>火车票</span>
					</div>
				</div>
			</div>
		);
	}
}

class Cyfl extends Component{
	render(){
		return (
			<div className="rmfl">
				<div className="rmfl-tit">
					<p>常用分类</p>
					<div>
						<i className="ic3"></i>
						<span>清空</span>
					</div>
				</div>
				<div className="rmfl-content">
					<div>
						<img src="/app/images/ic3.png"/>
						<span>羊绒衫</span>
					</div>
				</div>	
			</div>
		);
	}
}

class Hot extends Component{
	render(){
		return (
			<div className="hot-wrap">
				<a href="#" className="guanggao">
					<img src="/app/images/gg1.jpg"/>
				</a>
				<Zctj/>
				<Rmfl/>
				<Cyfl/>
			</div>
		);		
	}
}
export default Hot