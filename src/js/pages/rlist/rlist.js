import React from 'react'
import {Link} from 'react-router-dom'

import method from '../../tools/commonMethod.js'

import Weather from './component/weather.js'
import Swipe from './component/swipe.js'
import SearchInp from './component/searchInp.js'

import RstInfo from '../../common/restaurant.js'
import Footer from '../../common/footer.js'

// 缓存页面信息
var cacheGeo = '',
	title = {},
	weather = {},
	swipePic = [],
	hotWords = [],
	restaurant = [];

class Rlist extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: title || {},
			weather: weather || {},
			swipePic: swipePic || [],
			hotWords: hotWords || [],
			restaurant: restaurant || []
		}
	}
	componentWillMount (){
		var that = this;

		var loca = method.store('loca');
		if (loca) {
			var geohash = loca.geohash;
			var lat = loca.lat;
			var lnt = loca.lnt;
		}
		if ((loca && swipePic.length === 0) || (geohash && geohash !== cacheGeo)) {
			
			// 缓存地理位置
			cacheGeo = geohash;

			var loca_url = '/v2/pois/' + geohash;
			var swipe_url = '/v2/index_entry?geohash='+ geohash +'&group_type=1&flags[]=F';
			var weather_url = '/bgs/weather/current?latitude='+ lat +'&longitude=' + lnt;
			var hotwords_url = '/shopping/v3/hot_search_words?latitude='+ lat +'&longitude=' + lnt;
			var restaurant_url = '/shopping/restaurants?latitude='+ lat +'&longitude='+ lnt +'&offset=0&limit=20&extras[]=activities&terminal=h5';

			fetch(loca_url).then(function(res){
				return res.json()
			}).then(function(data){
				that.setState({
					title: data
				})
				title = data;
			})

			fetch(weather_url).then(function(res){
				return res.json()
			}).then(function(data){
				that.setState({
					weather: data
				})
				weather = data;
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
				hotWords = arr;
			})

			fetch(swipe_url).then(function(res){
				return res.json()
			}).then(function(data){
				that.setState({
					swipePic: data
				})
				swipePic = data;
			})

			fetch(restaurant_url).then(function(res){
				return res.json()
			}).then(function(data){
				that.setState({
					restaurant: data
				})
				restaurant = data;
			})
		}  else if(!loca) {
			that.setState({
				title: {
					name: '请先设置地址哦'
				}
			})
		}
	}
	loadMore (){
		console.log(1);
		var restaurant_url = '/shopping/restaurants?latitude='+ lat +'&longitude='+ lnt +'&offset=0&limit=20&extras[]=activities&terminal=h5';
		fetch(url).then(function(res){
			res.json()
		}).then(function(data){
			console.log(data);
		})
	}
	render (){
		return (
			<div id='rlist'>
				<div className='r-wrap'>
					<div className='header'>
						<div className='header-top'>
							<Link to='/address'><span className='icon-loca'></span><h2 className='location'>{this.state.title.name}</h2></Link>
							<Weather data={this.state.weather}></Weather>
						</div>
						<div className='header-center'>
							<SearchInp></SearchInp>
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