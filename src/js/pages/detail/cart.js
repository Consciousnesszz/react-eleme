import React from 'react'

export default class Cart extends React.Component {
	render(){
		var that = this;
		return (
			<div className="shop-footer">
				<div className="shop-cart">
					<div className="cart-img"><i className="iconfont icon-gouwuchekong"></i></div>
					<div className="cart-price">
						<p>{'￥' + this.props.count}</p>
						{
							(function(){
								if (that.props.data.piecewise_agent_fee) {
									return <span>{that.props.data.piecewise_agent_fee.tips}</span>
								}
							})()
						}
					</div>
				</div>
				<div className="shop-send">{'还差￥' + that.props.data.float_minimum_order_amount + '起送'}</div>
			</div>
		)
	}
}