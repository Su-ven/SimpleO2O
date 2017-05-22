/**
 * 
 * @authors Suven (you@example.org)
 * @date    2017-05-21 10:45:33
 * @version $Id$
 */


import React from 'react';
import './sytle.less';

class Loadmore extends React.Component{
	constructor(props) {
	  super(props);
	
	  this.state = {};
	}

	render() {
		return (
			<div>
				<div className="load-more" ref="wrapper">
					{
						this.props.isLoadingMore
						?
							<span>加载中...</span>
						:
							<span onClick={this.loadMoreHandle.bind( this )}>加载更多...</span>
					}
				</div>
			</div>
		);
	}

	loadMoreHandle(){
		console.log( 'test' );
		this.props.loadMoreFn();
	}
	componentDidMount(){
		const loadMoreFn = this.props.loadMoreFn;
		let timeoutId;
		const wrapper = this.refs.wrapper;

		function callback(){
			const top = wrapper.getBoundingClientRect().top;
			const windowH = window.screen.height;
			if ( top && top < windowH ) {
				loadMoreFn();
			}
		}

		window.addEventListener( 'scroll', function(){
			if ( this.props.isLoadingMore ) {
				return
			}
			if ( timeoutId ) {
				clearTimeout( timeoutId );
			}

			timeoutId = setTimeout( callback, 50 );
		}.bind( this ), false )
	}
}

export default Loadmore;