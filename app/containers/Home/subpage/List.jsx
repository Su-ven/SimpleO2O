/**
 * 
 * @authors Suven (you@example.org)
 * @date    2017-05-18 22:14:46
 * @version $Id$
 */

import React from 'react';
import { getListData } from '../../../fetch/home/home.js';
import HomeList from '../../../components/HomeList';
import Loadmore from '../../../components/Loadmore';

import './style.less'

class List extends React.Component{
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	isLoadingMore: false,
	  	hasMore: false,
	  	page: 1,
	  	data: []
	  };
	}

	render() {
		return (
			<div>
				{
					this.state.data.length
					?
						<HomeList data={this.state.data} />
					:
						<div>加载中...</div>
				}
				{
					this.state.hasMore
					?
						<Loadmore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreData.bind( this )} />
					:
						''
				}
			</div>
		);
	}

	componentDidMount(){
		const result = getListData( this.props.cityName, 0 );
		this.resultHandld( result );
	}

	loadMoreData(){
		this.setState({
			isLoadingMore: true,
		})
		const page = this.state.page;
		const result = getListData( this.props.cityName, page );
		this.resultHandld( result );
		this.setState({
			page: page + 1,
			isLoadingMore: false
		})
	}

	resultHandld( result ){
		result.then( res => {
			return res.json();
		} ).then( json => {
			const data = json.data;
			this.setState( {
				hasMore: json.hasMore,
				data: this.state.data.concat( data )
			} )
		} )
	}
}

export default List;