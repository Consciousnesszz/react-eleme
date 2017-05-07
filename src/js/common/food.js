import React from 'react'

import method from '../tools/commonMethod.js'

export default class Food extends React.Component {
	componentDidMount (){
		
		
	}
	// 绑定加减事件
	plus (){
		var foodId = this.refs.dl.getAttribute('data-foodid');
		method.factory.plus(foodId);
	}
	minus (){
		var foodId = this.refs.dl.getAttribute('data-foodid');
		method.factory.minus(foodId);
	}
	render (){
		var img_path = method.getImg(this.props.data, 'image_path');
		return (
			<dl className="food" ref='dl' data-foodid={this.props.data.item_id}>
				<dt className="food-img"><img src={img_path}/></dt>
				<dd className="food-dis">
					<h5 className="food-name">{ this.props.data.name  }</h5>
					<p className="food-title">{ this.props.data.description  }</p>
					<p className="food-nearly">{'月售'+this.props.data.month_sales+' 好评率'+this.props.data.satisfy_rate+'%'}</p>
					<div className="food-price">
						<span className="price">{'￥'+ this.props.data.specfoods[0].price }</span>
						<p>
							<i className="foods-minus" onClick={this.minus.bind(this)} style={{visibility:this.props.data.num?'visible':'hidden'}}>-</i>
							<span className="foods-num" style={{visibility:this.props.data.num?'visible':'hidden'}}>{this.props.data.num}</span>
							<i className="foods-plus" onClick={this.plus.bind(this)}>+</i>
						</p>
					</div>
				</dd>
			</dl>
		)
	}
}
