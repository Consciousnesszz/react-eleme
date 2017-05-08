import React from 'react'

export default class Cart extends React.Component {
	render(){
		var that = this;
		console.log(this.props.dif);
		return (
			<div className="shop-footer">
				<div className="shop-cart">
					<div className="cart-img" onClick={this.props.fn}><i className="iconfont icon-gouwuchekong"></i></div>
					<div className="cart-price">
						<p>{'￥' + Math.abs(this.props.price.toFixed(2))}</p>
						{
							(function(){
								if (that.props.data.piecewise_agent_fee) {
									return <span>{that.props.data.piecewise_agent_fee.tips}</span>
								}
							})()
						}
					</div>
				</div>
				<div className="shop-send" style={{background: this.props.dif >= 0 ? '#ccc' : '#0096ff'}}>{this.props.dif >= 0 ? '还差￥' + this.props.dif + '起送' : '马上配送'}</div>
			</div>
		)
	}
}