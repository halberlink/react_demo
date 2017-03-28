import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import { connect } from 'react-redux';


class Jdkb extends Component{
	render(){
		return (
			<div className="jdkb">
				<div className="box">
					<i></i>
					<div className="change"><span>大促</span>   过年不打烊，领取最高的奖励</div>
					<div className="more">更多</div>
				</div>
			</div>
		);
	}
}
export default Jdkb;