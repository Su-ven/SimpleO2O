/**
 * 
 * @authors Suven (star_riness@163.com)
 * @date    2017-05-17 15:18:18
 */

import * as actionTypes from '../constants/userinfo';

export function update( data ){
	return{
		type: actionTypes.USERINFO_UPDATE,
		data
	}
}