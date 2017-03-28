import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import Fademo from './TestDemo2';

class Father extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <Fademo text="click me" checked="true" />
        );
    }
}

export default Father;