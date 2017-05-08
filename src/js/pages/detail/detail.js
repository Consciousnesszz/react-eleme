import React from 'react'

import method from '../../tools/commonMethod.js'

import Header from './component/header.js'
import Nav from './component/nav.js'
import FoodNav from './component/foodNav.js'
import FoodList from './component/foodList.js'
import Cart from './component/cart.js'
import CartView from './component/cartView.js'
import ShopInf from './component/shopInf.js'

class Detail extends React.Component {
	constructor (props){
		super(props);
		this.state = {
			resInf: {},
			foodInf: {},
			orderCount: 0,
			orderPrice: 0,
			orderedFood: {},
			cartStatus: false,
			shopInfPos: '100%'
		}
	}
	componentWillMount (){
		var that = this;

		this.setState({
			orderedFood: {} || method.store('orderedFood')[this.props.match.params.id]
		})

		// 发送 ajax 请求
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
			
			var orderedFood = method.store(that.props.match.params.id);
			
			if (orderedFood) {
				for(var key in orderedFood){
					that.setState({
						orderCount: that.state.orderCount + orderedFood[key].num,
						orderPrice: that.state.orderPrice + orderedFood[key].num * orderedFood[key].specfoods[0].price
					})
				}
			} else {
				that.setState({
					orderCount: 0,
					orderPrice: 0
				})
			}
			for(var i in data){
				for(var j in data[i].foods){
					// 初始化数量
					data[i].foods[j].num = 0;
						
					if (orderedFood) {
						// 设置缓存中的数量
						for(var key in orderedFood) {
							if (data[i].foods[j].item_id === key) {
								data[i].foods[j].num = orderedFood[key].num;
							}
						}
					}
				}
			}
			
			that.setState({
				foodInf: data
			})
		})

		// 绑定整个页面公用的函数
		method.factory.showShopInfo = this.showShopInfo.bind(this);
		method.factory.plus = this.plus.bind(this);
		method.factory.minus = this.minus.bind(this);

		// 记录滚动高度
		method.factory.heightArr = [];
	}
	componentDidMount (){
		// 注册滚动监听
		//method.touchMove(document.getElementById('scroller'));
	}
	componentWillUnmount (){

	}
	showShopInfo (val){
		this.setState({
			shopInfPos: val
		})
	}
	plus (foodId){
		var restaurant_id = this.props.match.params.id;
		var foodInf = this.state.foodInf;
		var num = this.state.orderCount;
		var price = this.state.orderPrice;
		
		// 查找food
		for(var i in foodInf){
			for(var j in foodInf[i].foods){
				if (foodInf[i].foods[j].item_id == foodId) {
					num++;
					foodInf[i].foods[j].num++;
					this.setState({
						orderCount: num,
						orderPrice: price + foodInf[i].foods[j].specfoods[0].price,
						foodInf: foodInf
					})
					this.state.orderedFood[foodId] = foodInf[i].foods[j];
				}
			}
		}
		
		method.store(restaurant_id, this.state.orderedFood);
	}
	minus (foodId){
		var restaurant_id = this.props.match.params.id;
		var foodInf = this.state.foodInf;
		var num = this.state.orderCount;
		var price = this.state.orderPrice;
		// 查找food
		for(var i in foodInf){
			for(var j in foodInf[i].foods){
				if (foodInf[i].foods[j].item_id == foodId) {
					num--;
					foodInf[i].foods[j].num--;
					this.setState({
						orderCount: num,
						orderPrice: price - foodInf[i].foods[j].specfoods[0].price,
						foodInf: foodInf
					})
					this.state.orderedFood[foodId] = foodInf[i].foods[j];
				}
			}
		}
		method.store(restaurant_id, this.state.orderedFood);
	}
	showCartView (){
		this.setState({
			cartStatus: !this.state.cartStatus
		})
	}
	render (){
		var that = this;
		console.log(this.state.resInf.float_minimum_order_amount);
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
					</div>
					<CartView status={this.state.cartStatus} fn={this.showCartView.bind(this)}></CartView>
					<Cart data={this.state.resInf} count={this.state.orderCount} price={this.state.orderPrice} fn={this.showCartView.bind(this)} dif={(this.state.resInf.float_minimum_order_amount - this.state.orderPrice).toFixed(2)}></Cart>
				</div>
				<div className="shop-info-wrap" style={{left: this.state.shopInfPos}}>
					<ShopInf data={this.state.resInf}></ShopInf>
				</div>
			</div>
		)
	}
}

export default Detail