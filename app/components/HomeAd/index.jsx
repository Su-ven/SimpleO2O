/**
 * 
 * @authors Suven (you@example.org)
 * @date    2017-05-18 14:45:56
 * @version $Id$
 */

import React from 'react';
import './style.less';

class HomeAd extends React.Component{
	constructor(props) {
	  super(props);
	
	  this.state = {};
	}

	render() {
		const data = this.props.data;
		return (
			<div id="home-ad">
				<h2>特惠</h2>
				<div className="ad-container clear-fix">
					{data.map( ( item, index ) => {
						return <div key={index} className="ad-item float-left">
							<a href={item.link}>
								<img src={item.img} title={item.title} />
							</a>
						</div>
					} )}
				</div>
			</div>
		);
	}
}

export default HomeAd;