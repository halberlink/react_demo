import React,{ Component, PropTypes } from 'react';
import ReactDOM, { render } from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reducer from '../reducers/reducer'

var store=createStore(reducer);

export default store