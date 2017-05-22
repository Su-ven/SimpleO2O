/**
 * 
 * @authors Suven (star_riness@163.com)
 * @date    2017-05-17 15:11:39
 */

import * as actionTypes from '../constants/userinfo.js';

const initialState = {}

export default function userinfo( state = initialState, action ) {
	switch ( action.type ){
		case actionTypes.USERINFO_UPDATE:
			return action.data
		default: 
			return state
	}
}