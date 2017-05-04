import React from 'react'

export default class Nav extends React.Component {
	render(){
		return (
			<div className="shop-nav">
				<ul>
					<li><div><span className="active">商品</span></div></li>
					<li><div><span>评价</span></div></li>
				</ul>
			</div>
		)
	}
}