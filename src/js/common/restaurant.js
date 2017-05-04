import React from 'react'

import method from '../tools/commonMethod.js'

export default class ResInfo extends React.Component {
	render (){
		var data = this.props.data;
		var img_path = method.getImg(data, 'image_path');
		var title = '', tags = [], delivery = '';
		if (!data.is_premium) {
			title = <h4 className="res-title no-brand">{data.name}</h4>
		} else {
			title = <h4 className="res-title">{data.name}</h4>
		}


		if (data.supports) {
			for (var j = 0; j < data.supports.length; j++){
				if (data.supports[j].icon_name === "保") {
					tags.push(<i className="tags sure" key={j}>保</i>)
				} else if (data.supports[j].icon_name === "票") {
					tags.push(<i className="tags ticket" key={j}>票</i>)
				} else if (data.supports[j].icon_name === "准") {
					tags.push(<i className="tags exact" key={j}>准</i>)
				}
			}
		}

		if (data.delivery_mode) {
			delivery = (
				<div className="center-tag">
					<span className="ontime">准时达</span>
					<span className="feeder">蜂鸟专送</span>
				</div>
			)
		}

		return (
			<a href={'#/detail/' + data.id}>
				<dl className="restaurant">
					<dt className="res-img">
						<img src={img_path}/>
					</dt>
					<dd className="res-dis">
						<div className="dis-top">
							{title}
							<div className="top-tag">
							{tags}
							</div>
						</div>
						<div className="dis-center">
							<div className="res-info"><div className='r-star'><img className='rate-star' src='/src/img/star.png'/><i className='star-filter' style={{width: (5 - data.rating) / 5 * 100 + '%'}}></i></div><span>{data.rating}</span>月售{data.recent_order_num}单</div>
							{delivery}
						</div>
						<div className="dis-bottom">
							<p className="res-price">￥<span className="r-begin">{data.float_minimum_order_amount}</span>起送 / 配送费￥<span className="r-add">{data.float_delivery_fee}</span></p>
							<div className="bottom-tag"><span className="r-distance">{(data.distance / 1000).toFixed(2)+'km'}</span> / <span className="r-time">{data.order_lead_time}分钟</span></div>
						</div>
					</dd>
				</dl>
			</a>
		)
	}
}