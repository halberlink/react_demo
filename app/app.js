import React,{ Component, PropTypes } from 'react';
import ReactDOM, { render } from 'react-dom';
import { Provider } from 'react-redux';

import route from './config/Route';
import store from './config/Store';
import './style/style.scss';
import './js/tool.js';
var wrap=document.createElement('div');
wrap.className='wrap';

render(
	<Provider store={store}>
        {route}
    </Provider>,
    document.body.appendChild(wrap)
);