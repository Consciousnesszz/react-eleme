import React from 'react'

export default class Cart extends React.Component {
	render(){
		var that = this;
		var dif = this.props.data.float_minimum_order_amount - this.props.price;
		return (
			<div className="shop-footer">
				<div className="shop-cart">
					<div className="cart-img" onClick={this.props.fn}><i className="iconfont icon-gouwuchekong"></i></div>
					<div className="cart-price">
						<p>{'￥' + this.props.price}</p>
						{
							(function(){
								if (that.props.data.piecewise_agent_fee) {
									return <span>{that.props.data.piecewise_agent_fee.tips}</span>
								}
							})()
						}
					</div>
				</div>
				<div className="shop-send" style={{background: dif > 0 && !that.props.count ? '#ccc' : '#0096ff'}}>{dif > 0 && !that.props.count ? '还差￥' + dif + '起送' : '马上配送'}</div>
			</div>
		)
	}
}