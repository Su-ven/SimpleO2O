/**
 * 
 * @authors Suven (you@example.org)
 * @date    2017-05-15 22:22:03
 * @version $Id$
 */

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { hashHistory } from 'react-router';
import Routers from './router/routers'
import configureStore from './store/configureStore'

import './static/css/common.less'
import './static/css/font.css'

// 创建 Redux 的 store 对象
const store = configureStore()

render(
	<Provider store={store}>
    	<Routers history={hashHistory}/>
	</Provider>,
	document.getElementById('root')
)