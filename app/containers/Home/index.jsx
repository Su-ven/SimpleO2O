/**
 * 
 * @authors Suven (you@example.org)
 * @date    2017-05-16 07:11:54
 * @version $Id$
 */

import React from 'react';
import HomeHeader from '../../components/HomeHeader';
import { connect } from 'react-redux';
import Category from '../../components/Category';
import Ad from './subpage/ad';
import List from './subpage/List';

class Home extends React.Component{
	constructor(props) {
	  super(props);
	}

	render() {
		return (
			<div>
				<HomeHeader cityName={this.props.userinfo.cityName} />
				<Category />
				<Ad />
				<List cityName={this.props.userinfo.cityName} />
			</div>
		);
	}
}

function clickFn(  ){
	 console.log( 'a' );
}

function mapStateToProps( state ){
	return{
		userinfo: state.userinfo
	}
}

function mapDispatchToProps( dispatch ){
	return {}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Home);