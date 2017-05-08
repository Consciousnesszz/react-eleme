import React from 'react'

import Header from '../../../common/header.js'

export default class Cart extends React.Component {
	render(){
		var that = this;
		return (
			<div className="shop-info-content">
				<Header text='商家详情'></Header>
				<section>
					<div>
						<h4>活动与属性</h4>
						<ul>
							
						</ul>
					</div>
					<div>
						<h4>食品监督安全公示</h4>
						
					</div>
					<div>
						<h4>商家信息</h4>
						
					</div>
				</section>
			</div>
		)
	}
}