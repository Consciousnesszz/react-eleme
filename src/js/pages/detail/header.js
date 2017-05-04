import React from 'react'

import method from '../../tools/commonMethod.js'

export default class Header extends React.Component {
	render(){
		var response = this.props.data;
		var img_path = method.getImg();
		return (
			<div className="shop-title">
				<div className="s-t-top">
					<i className="icon-arrow" id="back"></i>
				</div>
				<div className="s-t-center">
					<dl className="shop-name">
						<dt className="shop-img">
							<img src={img_path}/>
						</dt>
						<dd className="shop-dis">
							<ul>
								<li><h3>{response.name}</h3></li>
								{
									function(){
										if (response.delivery_mode) {
											return <li>{'蜂鸟专送 / ' + response.order_lead_time +'分钟送达 / '+ response.piecewise_agent_fee.tips}</li>
										} else {
											return <li>{'商家配送 / ' + response.order_lead_time +'分钟送达 / '+ response.piecewise_agent_fee.tips}</li>
										}
									}
								}
								{
									function(){
										if (response.promotion_info) {
											return <li>{'公告：'+ response.promotion_info }</li>
										} else {
											return <li>公告：欢迎光临，用餐高峰期请提前下单，谢谢。</li>
										}
									}
								}
								<li className="go-shop-detail"></li>
							</ul>
						</dd>
					</dl>
				</div>
				<div className="s-t-bottom">
					<div>
					{
						function(){
							if (response.activities[0].icon_name === '新') {
								return <i className="new">新</i>
							} else {
								return <i className="cut">减</i>
							}
						}
					}
					<span>{response.activities[0].description}</span>
					</div>
					<div>{response.activities.length + '个活动'}</div>
				</div>					
			</div>
		)
	}
}