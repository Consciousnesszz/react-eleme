import React from 'react'

import method from '../../tools/commonMethod.js'

export default class SortOptions extends React.Component {
	sort (event){
		if (event.target.tagName === 'P') {
			method.factory.sortRes(event.target.getAttribute('type'), event.target.getAttribute('dir'))
			this.props.fn();
		}
	}
	render (){
		return (
			<div className='sort-options'>
				<ol onClick={this.sort.bind(this)}>
					<li><i></i><p type='sortE'>智能排序</p></li>
					<li><i></i><p type='distance'>距离最近</p></li>
					<li><i></i><p type='recent_order_num' dir='big'>销量最高</p></li>
					<li><i></i><p type='float_minimum_order_amount'>起送价最低</p></li>
					<li><i></i><p type='order_lead_time'>配送速度最快</p></li>
					<li><i></i><p type='rating' dir='big'>评分最高</p></li>
				</ol>
			</div>
		)
	}
} 