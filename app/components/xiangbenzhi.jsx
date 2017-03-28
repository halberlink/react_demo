import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import { connect } from 'react-redux';

class Ft extends Component{
	render(){
		return (
			<div className="ft">
				<div className="item">
					<div className="text">
						<p>全球尖货</p>
						<p>10w关注好店</p>
					</div>
					<div className="img">
						<img src="/app/images/xp5.jpg"/>
					</div>	
				</div>
				<div className="item">
					<div className="text">
						<p>全球尖货</p>
						<p>10w关注好店</p>
					</div>
					<div className="img">
						<img src="/app/images/xp6.jpg"/>
					</div>	
				</div>
				<div className="item">
					<div className="text">
						<p>全球尖货</p>
						<p>10w关注好店</p>
					</div>
					<div className="img">
						<img src="/app/images/xp7.jpg"/>
					</div>	
				</div>
				<div className="item">
					<div className="text">
						<p>全球尖货</p>
						<p>10w关注好店</p>
					</div>
					<div className="img">
						<img src="/app/images/xp8.jpg"/>
					</div>	
				</div>
			</div> 
		);
	}
}
class Xpz extends Component{
	render(){
		return (
			<div className="ash">
				<div className="title">
					<span>
					</span>
				</div>
				<div className="box">
					<div className="item">
						<div className="text">
							<p>货物精选</p>
							<p>荣耀8放量抢</p>
							<p>品质触手可及</p>
						</div>
						<div className="img">
							<img src="/app/images/xp1.jpg"/>
						</div>
					</div>
					<div className="item">
						<div className="text">
							<p>玩3C</p>
							<p>荣耀8放量抢</p>
							<p>春节不打烊</p>
						</div>
						<div className="img">
							<img src="/app/images/xp2.jpg"/>
						</div>
					</div>
					<div className="item">
						<div className="text">
							<p>玩3C</p>
							<p>荣耀8放量抢</p>
							<p>春节不打烊</p>
						</div>
						<div className="img">
							<img src="/app/images/xp3.jpg"/>
						</div>
					</div>
					<div className="item">
						<div className="text">
							<p>玩3C</p>
							<p>荣耀8放量抢</p>
							<p>春节不打烊</p>
						</div>
						<div className="img">
							<img src="/app/images/xp4.jpg"/>
						</div>
					</div>
				</div>
				<Ft/>
			</div>
		);
	}
}
export default Xpz