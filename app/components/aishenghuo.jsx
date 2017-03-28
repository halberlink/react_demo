import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import { connect } from 'react-redux';

class Ft extends Component{
	render(){
		return (
			<div className="ft">
				<div className="item">
					<div className="text">
						<p>爱宝宝</p>
						<p>满300减80</p>
					</div>
					<div className="img">
						<img src="/app/images/as5.jpg"/>
					</div>	
				</div>
				<div className="item">
					<div className="text">
						<p>爱宝宝</p>
						<p>满300减80</p>
					</div>
					<div className="img">
						<img src="/app/images/as6.jpg"/>
					</div>	
				</div>
				<div className="item">
					<div className="text">
						<p>爱宝宝</p>
						<p>满300减80</p>
					</div>
					<div className="img">
						<img src="/app/images/as7.jpg"/>
					</div>	
				</div>
				<div className="item">
					<div className="text">
						<p>爱宝宝</p>
						<p>满300减80</p>
					</div>
					<div className="img">
						<img src="/app/images/as8.jpg"/>
					</div>	
				</div>
			</div> 
		);
	}
}
class Ash extends Component{
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
							<p>玩3C</p>
							<p>荣耀8放量抢</p>
							<p>春节不打烊</p>
						</div>
						<div className="img">
							<img src="/app/images/as1.jpg"/>
						</div>
					</div>
					<div className="item">
						<div className="text">
							<p>玩3C</p>
							<p>荣耀8放量抢</p>
							<p>春节不打烊</p>
						</div>
						<div className="img">
							<img src="/app/images/as2.jpg"/>
						</div>
					</div>
					<div className="item">
						<div className="text">
							<p>玩3C</p>
							<p>荣耀8放量抢</p>
							<p>春节不打烊</p>
						</div>
						<div className="img">
							<img src="/app/images/as3.jpg"/>
						</div>
					</div>
					<div className="item">
						<div className="text">
							<p>玩3C</p>
							<p>荣耀8放量抢</p>
							<p>春节不打烊</p>
						</div>
						<div className="img">
							<img src="/app/images/as4.jpg"/>
						</div>
					</div>
				</div>
				<Ft/>
			</div>
		);
	}
}
export default Ash