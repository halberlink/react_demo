import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import { connect } from 'react-redux';

class Jdnav extends Component{
	render(){
		return (
			<div className="jd-nav">
				<div>
					<div>
					<img src="/app/images/da1.jpg"/>
					</div>
					<p>大型超市</p>
				</div>
				<div>
					<div>
					<img src="/app/images/da2.jpg"/>
					</div>
					<p>全球购</p>
				</div>
				<div>
					<div>
					<img src="/app/images/da3.png"/>
					</div>
					<p>服装城</p>
				</div>
				<div>
					<div>
					<img src="/app/images/da4.png"/>
					</div>
					<p>全是生鲜</p>
				</div>
				<div>
					<div>
					<img src="/app/images/da5.png"/>
					</div>
					<p>我想到家</p>
				</div>
				<div>
					<div>
					<img src="/app/images/da6.png"/>
					</div>
					<p>充值中心</p>
				</div>
				<div>
					<div>
					<img src="/app/images/da7.png"/>
					</div>
					<p>惠赚钱</p>
				</div>
				<div>
					<div>
					<img src="/app/images/da8.png"/>
					</div>
					<p>领卷</p>
				</div>
				<div>
					<div>
					<img src="/app/images/da9.png"/>
					</div>
					<p>物流查询</p>
				</div>
				<div>
					<div>
					<img src="/app/images/da10.png"/>
					</div>
					<p>我的关注</p>
				</div>
			</div>
		);
	}
}
export default Jdnav