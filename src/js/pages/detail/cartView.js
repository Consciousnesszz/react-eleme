import React from 'react'

export default class CartView extends React.Component {
	render (){
		return (
			<div className="show-cart-foods" onClick={this.props.fn} style={{display:this.props.status?'block':'none'}}>
				<dl className="show-info">
					<dt className="show-header">
						<h4 className="show-title">购物车</h4>
						<div className="clear">清空</div>
					</dt>
					<dd className="show-content">
						<ul>

						</ul>
					</dd>
				</dl>
			</div>
		)
	}
}