/**
 * 
 * @authors Suven (you@example.org)
 * @date    2017-05-16 07:11:08
 * @version $Id$
 */

import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import SaveStore from '../until/SaveStore';
import { CITYNAME } from '../config/LocalStoreKey';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ActionsUserInfo from '../actions/userinfo';

class App extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			initDone: false
		};
	}

	render() {
		return (
			<div>
				<Header />
				{
					this.state.initDone 
					?
						this.props.children
					:
					    <div>加载中...</div>
				}
				<Footer />
			</div>
		);
	}

	componentDidMount() {
		let cityName = SaveStore.getItem( CITYNAME );
		if (cityName == null) {
			cityName = '深圳'
		}
		

		// 城市信息存到redux中
		this.props.userinfoActions.update({
			cityName: cityName
		})


		setTimeout(() => {
			this.setState({ initDone: true });
		},1000);
	}
}

function mapStateToProps( state ){
	return{}
}

function mapDispatchToProps( dispatch ){
	return{
		userinfoActions: bindActionCreators( ActionsUserInfo, dispatch )
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);