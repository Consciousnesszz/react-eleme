import React from 'react'
import {Link} from 'react-router-dom'

import method from '../../tools/commonMethod.js'

import Header from './header.js'
import Nav from './nav.js'
import FoodNav from './foodNav.js'
import FoodList from './foodList.js'
import Cart from './cart.js'
import ShopInf from './shopInf.js'

class Detail extends React.Component {
	constructor (props){
		super(props);
		this.state = {
			resInf: {},
			foodInf: {},
			orderCount: 0,
			shopInfPos: '100%'
		}
	}
	componentWillMount (){
		var that = this;
		var loca = method.store('loca');

		// 商店信息
		var res_url = "https://mainsite-restapi.ele.me/shopping/restaurant/"+ this.props.match.params.id +"?extras[]=activities&extras[]=album&extras[]=license&extras[]=identification&extras[]=statistics&latitude="+ loca.lat +"&longitude="+ loca.lnt;
		fetch(res_url).then(function(res){
			return res.json();
		}).then(function(data){
			that.setState({
				resInf: data
			})
		})
		
		// 食品信息
		var food_url = 'https://mainsite-restapi.ele.me/shopping/v2/menu?restaurant_id='+ this.props.match.params.id;
		fetch(food_url).then(function(res){
			return res.json();
		}).then(function(data){
			that.setState({
				foodInf: data
			})
		})
		// 绑定整个页面公用的函数
		method.factory.showShopInfo = this.showShopInfo.bind(this);
		// 记录滚动高度
		method.factory.heightArr = [];
	}
	componentDidMount (){
		// 注册滚动监听
		//method.touchMove(document.getElementById('scroller'));
	}
	showShopInfo (val){
		this.setState({
			shopInfPos: val
		})
	}
	render (){
		var that = this;
		return (
			<div className="section" id="detail">
				<div className="detail-flex">
					<div className="shop-header">
						<Header data={this.state.resInf}></Header>
						<Nav></Nav>
					</div>
					<div className="shop-main">
						<div className="smain-left">
							<FoodNav data={this.state.foodInf}></FoodNav>
						</div>
						<div className="smain-right">
							<div className="food-wrap" id="scroller">
								{
									(function(){
										if (that.state.foodInf[0]) {
											return that.state.foodInf.map(function(val, i){
												return <FoodList num={i} key={i} data={val}></FoodList>
											})
										}
									})()
								}
							</div>
						</div>
						<div className="show-cart-foods">
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
					</div>
					<Cart data={this.state.resInf} count={this.state.orderCount}></Cart>
				</div>
				<div className="shop-info-wrap" style={{left: this.state.shopInfPos}}>
					<ShopInf data={this.state.resInf}></ShopInf>
				</div>
			</div>
		)
	}
}

export default Detail