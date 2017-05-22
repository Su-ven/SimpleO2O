/**
 * 
 * @authors Suven (you@example.org)
 * @date    2017-05-18 10:03:56
 * @version $Id$
 */

import React from 'react';
import ReactSwipe from 'react-swipe';
import './style.less';

class Category extends React.Component{
	constructor(props) {
	  super(props);
	
	  this.state = { index: 0 };
	}

	render() {
		var opt = {
			auto: 2000,
			callback: ( index ) => {
				this.setState({
					index: index
				})
			}
		}

		return (
			<div id="home-category">
				<ReactSwipe className="carousel" swipeOptions={opt}>
	                <div className="carousel-item">
	                	<ul>
	                		<li className="jingdian float-left"></li>
	                		<li className="ktv float-left"></li>
	                		<li className="gouwu float-left"></li>
	                		<li className="shenghuofuwu float-left"></li>
	                		<li className="jianshenyundong float-left"></li>
	                		<li className="meifa float-left"></li>
	                		<li className="qinzi float-left"></li>
	                		<li className="xiaochikuaican float-left"></li>
	                		<li className="zizhucan float-left"></li>
	                		<li className="jiuba float-left"></li>
	                	</ul>
	                </div>
	                <div className="carousel-item">
	                	<ul>
	                		<li className="meishi float-left"></li>
	                		<li className="dianying float-left"></li>
	                		<li className="jiudian float-left"></li>
	                		<li className="xuixianyule float-left"></li>
	                		<li className="waimai float-left"></li>
	                		<li className="huoguo float-left"></li>
	                		<li className="liren float-left"></li>
	                		<li className="dujiachuxing float-left"></li>
	                		<li className="zuliaoanmo float-left"></li>
	                		<li className="zhoubianyou float-left"></li>
	                	</ul>
	                </div>
	                <div className="carousel-item">
	                	<ul>
	                		<li className="ribencai float-left"></li>
	                		<li className="SPA float-left"></li>
	                		<li className="jiehun float-left"></li>
	                		<li className="xuexipeixun float-left"></li>
	                		<li className="xican float-left"></li>
	                		<li className="huochejipiao float-left"></li>
	                		<li className="shaokao float-left"></li>
	                		<li className="jiazhuang float-left"></li>
	                		<li className="chongwu float-left"></li>
	                		<li className="quanbufenlei float-left"></li>
	                	</ul>
	                </div>
	            </ReactSwipe>
	            <div className="carousel-ctrl">
	            	<ul>
	            		<li className={this.state.index === 0 ? 'active' : ''}></li>
	            		<li className={this.state.index === 1 ? 'active' : ''}></li>
	            		<li className={this.state.index === 2 ? 'active' : ''}></li>
	            	</ul>
	            </div>
			</div>
		);
	}
}

export default Category;