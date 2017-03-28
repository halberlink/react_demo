import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import { connect } from 'react-redux';

class Flnav extends Component{
	render(){
		return (
			<ul>
				<li className="on">
					<span>热门推荐</span>
				</li>
				<li>
					<span>潮流女装</span>
				</li>
				<li>
					<span>品牌男装</span>
				</li>
				<li>
					<span>个护化妆</span>
				</li>
				<li>
					<span>家用电器</span>
				</li>
				<li>
					<span>电脑办公</span>
				</li>
				<li>
					<span>手机数码</span>
				</li>
				<li>
					<span>母婴童装</span>
				</li>
				<li>
					<span>图书</span>
				</li>
				<li>
					<span>家居家纺</span>
				</li>
				<li>
					<span>居家生活</span>
				</li>
				<li>
					<span>家居建材</span>
				</li>
				<li>
					<span>食品生鲜</span>
				</li>
				<li>
					<span>酒水饮料</span>
				</li>
				<li>
					<span>运动户外</span>
				</li>
				<li>
					<span>鞋靴箱包</span>
				</li>
				<li>
					<span>奢品礼品</span>
				</li>
				<li>
					<span>钟表珠宝</span>
				</li>
				<li>
					<span>玩具乐器</span>
				</li>
				<li>
					<span>内衣配饰</span>
				</li>
				<li>
					<span>汽车用品</span>
				</li>
				<li>
					<span>音响制品</span>
				</li>
				<li>
					<span>医药保健</span>
				</li>
				<li>
					<span>计生情趣</span>
				</li>
				<li>
					<span>全球购</span>
				</li>
				<li>
					<span>全球金融</span>
				</li>
				<li>
					<span>生活旅行</span>
				</li>
				<li>
					<span>宠物农资</span>
				</li>
			</ul>
		);
	}
}

export default Flnav