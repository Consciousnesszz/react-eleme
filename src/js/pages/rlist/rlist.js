import React from 'react'
import {Link} from 'react-router-dom'

import method from '../../tools/commonMethod.js'

import Weather from './weather.js'
import Swipe from './swipe.js'
import RstInfo from './restaurant.js'

import Footer from '../../common/footer.js'

var loca = {},
	weather = {},
	swipePic = [],
	hotWords = [],
	restaurant = [];

class Rlist extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loca: loca || {},
			weather: weather || {},
			swipePic: swipePic || [],
			hotWords: hotWords || [],
			restaurant: restaurant || []
		}
	}
	componentDidMount (){
		console.log(loca);
		var that = this;
		var geohash = method.store('loca');
		if (geohash) {
			var loca_url = '/v2/pois/' + geohash;
			fetch(loca_url).then(function(res){
				return res.json()
			}).then(function(data){
				that.setState({
					loca: data
				})
				loca = data;
				console.log(loca);
			}).then(function(){
				var weather_url = '/bgs/weather/current?latitude='+ that.state.loca.latitude +'&longitude=' + that.state.loca.longitude;
				var swipe_url = '/v2/index_entry?geohash='+ geohash +'&group_type=1&flags[]=F';
				var hotwords_url = '/shopping/v3/hot_search_words?latitude='+ that.state.loca.latitude +'&longitude=' + that.state.loca.longitude;
				var restaurant_url = '/shopping/restaurants?latitude='+ that.state.loca.latitude +'&longitude='+ that.state.loca.longitude +'&offset=0&limit=20&extras[]=activities&terminal=h5';
				fetch(weather_url).then(function(res){
					return res.json()
				}).then(function(data){
					that.setState({
						weather: data
					})
					weather = data;
				})
				fetch(swipe_url).then(function(res){
					return res.json()
				}).then(function(data){
					console.log(data);
					that.setState({
						swipePic: data
					})
					swipePic = data;
				})
				fetch(hotwords_url).then(function(res){
					return res.json()
				}).then(function(data){
					var arr = [];
					for(var prop in data){
						arr.push(data[prop].word)
					}
					that.setState({
						hotWords: arr
					})
					hotWords = data;
				})
				fetch(restaurant_url).then(function(res){
					return res.json()
				}).then(function(data){
					console.log(data);
					that.setState({
						restaurant: data
					})
					restaurant = data;
				})
			})
		} else {
			that.setState({
				loca: {
					name: '请先设置地址哦'
				}
			})
		}
	}
	render (){
		return (
			<div id='rlist'>
				<div className='r-wrap'>
					<div className='header'>
						<div className='header-top'>
							<Link to='/address'><span className='icon-loca'></span><h2 className='location'>{this.state.loca.name}</h2></Link>
							<Weather data={this.state.weather}></Weather>
						</div>
						<div className='header-center'>
							<input type="text" className="rl-search" placeholder="搜索商家、商品" />
						</div>
						<div className='header-bottom'>
							<ul>
								{
									this.state.hotWords.map(function(value, index){
										return <li key={index}>{value}</li>
									})
								}
							</ul>
						</div>
					</div>
					<Swipe data={this.state.swipePic}></Swipe>
					<div className='content'>
						<h3 className='c-title'>推荐商家</h3>
						<section>
							{
								this.state.restaurant.map(function(value, index){
									return <RstInfo data={value} key={index}></RstInfo>
								})
							}
						</section>
					</div>
				</div>
				<Footer></Footer>
			</div>
		)
	}
}

export default Rlist