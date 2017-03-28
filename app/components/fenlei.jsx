import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import { connect } from 'react-redux';
import SearchHead from './searchHead';
import Flnav from './flnav';
import Hot from './hot';

class Fenlei extends Component{
	render(){
		return (
			<div className="fenlei">
				<SearchHead/>
				<div className="flex-box">
					<Flnav/>
					<Hot/>
				</div>
			</div>
		);
	}
}
export default Fenlei