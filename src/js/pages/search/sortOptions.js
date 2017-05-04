import React from 'react'

import method from '../../tools/commonMethod.js'

export default class SortOptions extends React.Component {
	clever (){
		method.factory.sortRes('sortE');
		this.props.fn();
	}
	distance (){
		method.factory.sortRes('distance');
		this.props.fn();
	}
	sell (){
		method.factory.sortRes('recent_order_num', 'big');
		this.props.fn();
	}
	begin (){
		method.factory.sortRes('float_minimum_order_amount');
		this.props.fn();
	}
	speed (){
		method.factory.sortRes('order_lead_time');
		this.props.fn();
	}
	rate (){
		method.factory.sortRes('rating', 'big');
		this.props.fn();
	}
	render (){
		return (
			<div className='sort-options'>
				<ol>
					<li onClick={this.clever.bind(this)}><i></i><p>智能排序</p></li>
					<li onClick={this.distance.bind(this)}><i></i><p>距离最近</p></li>
					<li onClick={this.sell.bind(this)}><i></i><p>销量最高</p></li>
					<li onClick={this.begin.bind(this)}><i></i><p>起送价最低</p></li>
					<li onClick={this.speed.bind(this)}><i></i><p>配送速度最快</p></li>
					<li onClick={this.rate.bind(this)}><i></i><p>评分最高</p></li>
				</ol>
			</div>
		)
	}
} 