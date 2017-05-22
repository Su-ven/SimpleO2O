/**
 * 
 * @authors Suven (star_riness@163.com)
 * @date    2017-05-17 15:03:46
 */

import { createStore } from 'redux';
import rootReducer from '../reducers';

export default function configureStore( initialState ){
	const store = createStore( rootReducer, initialState, 
		window.devToolsExtension ? window.devToolsExtension() : undefined 
	);
	return store
}