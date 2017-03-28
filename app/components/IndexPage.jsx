import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import { connect } from 'react-redux';
import {Header,Footer} from './common';
import Lunbo from './lunbo';
import Jdnav from './jd-nav';
import Jdkb from './jdkb';
import Ash from './aishenghuo';
import Xpz from './xiangbenzhi';

class IndexPage extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
			<div className="indexPage">
			 <div id="tishi" className="tishi hidden">
			 	<p>可点击</p>
			 	<div className="right-top"></div>
			 	<div className="bottom"></div>
			 </div>
			 <Header/>
			 <div className="content">
			    <Lunbo/>
			    <div  className="guanggao">
			    	<img src="/app/images/guanggao.jpg"/>
			    </div>
			    <Jdnav/>
			    <Jdkb/>
			    <Ash/>
			    <Xpz/>
			 </div>
			 <Footer/>
			</div>
		);
	}
	componentDidMount(){
		window.onload=function(){
			window.num=1;
			let tishi=document.getElementById('tishi');
			let cls=tishi.className;
			cls=cls.replace('hidden','show');
			tishi.className=cls;
			setTimeout(function(){
				let cls=tishi.className;
				cls=cls.replace('show','hidden');
				tishi.className=cls;
			},3000);
		};
	}
}
export default IndexPage;