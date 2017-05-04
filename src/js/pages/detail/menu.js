import React from 'react'

export default class Cart extends React.Component {
	render(){
		return (
			<div className="shop-footer">
				<div className="shop-cart">
					<div className="cart-img"><i className="iconfont icon-gouwuchekong"></i></div>
					<div className="cart-price">
						<p>￥0</p>
						<span>配送费￥4</span>
					</div>
				</div>
				<div className="shop-send">还差￥20起送</div>
			</div>
		)
	}
}