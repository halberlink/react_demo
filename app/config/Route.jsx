import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router';

//子组件
import IndexPage  from '../components/IndexPage';
import LoginUser from '../components/login';
import Fenlei from '../components/fenlei';
import Faxian from '../components/faxian';
import Singin from '../components/singin';
import ShopCar from '../components/shop_car';
import AppTest from '../components/AppTest';
class Roots extends Component{
	render(){
		return (
			<div className="wrap">{this.props.children}</div>
		);
	}
}


var history = process.env.NODE_ENV !== 'production' ? browserHistory : hashHistory;

const RouteConfig=(
	<Router history={history}>
		<Route path="/" component={Roots}>
			<IndexRoute component={IndexPage} />
			<Route path="login" component={LoginUser}/>
			<Route path="fenlei" component={Fenlei}/>
			<Route path="faxian" component={Faxian}/>
			<Route path="shopcar" component={ShopCar}/>
			<Route path="singin" component={Singin}/>
			<Route path="reduxtest" component={AppTest}/>
		</Route>
	</Router>		
);
export default RouteConfig;
