/**
 * 
 * @authors Suven (you@example.org)
 * @date    2017-05-18 22:14:10
 * @version $Id$
 */

import React from 'react';
import ListItem from './Item/index';
import './style.less';

class HomeList extends React.Component{
	constructor(props) {
	  super(props);
	  this.state = {};
	}
	render() {
		const data = this.props.data;
		return (
			<div className="list-Box">
				<h2>猜你喜欢</h2>
				<div className="list-container">
					{data.map( (item, index) => {
						return <ListItem key={index} data={item} />
					} )}
				</div>
			</div>
		);
	}
}

export default HomeList;