/**
 * 
 * @authors Suven (star_riness@163.com)
 * @date    2017-05-17 11:48:54
 */

export default {
	getItem: function ( key ) {
		let value
		try{
			value = localStorage.getItem( key );
		} catch ( err ){
			if ( __DEV__ ) {
				console.error( 'localStorage getItem error: ', err.message )
			}
		} finally {
			return value;
		}
	},

	setItem: function ( key,value ){
		try{
			localStorage.setItem( key,value );
		} catch ( err ) {
			if (  __DEV__ ) {
				console.error( 'localStorage setItem error: ', err.message )
			}
		}
	}
}