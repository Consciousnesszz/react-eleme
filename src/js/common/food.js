import React from 'react'

import method from '../tools/commonMethod.js'

export default class Food extends React.Component {
	render (){
		var img_path = method.getImg(this.props.data, 'image_path');
		return (
			<dl className="food" data-foodId={this.props.data.item_id}>
				<dt className="food-img"><img src={img_path}/></dt>
				<dd className="food-dis">
					<h5 className="food-name">{ this.props.data.name  }</h5>
					<p className="food-title">{ this.props.data.description  }</p>
					<p className="food-nearly">{'月售'+this.props.data.month_sales+' 好评率'+this.props.data.satisfy_rate+'%'}</p>
					<div className="food-price">
						<span className="price">{'￥'+ this.props.data.specfoods[0].price }</span>
						<p>
							<i className="foods-minus">-</i>
							<span className="foods-num">{}</span>
							<i className="foods-plus">+</i>
						</p>
					</div>
				</dd>
			</dl>
		)
	}
}
