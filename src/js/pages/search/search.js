import React from 'react'
import {Link} from 'react-router-dom'

import HeadInp from './input.js'
import SortNav from './sortNav.js'

import ResInfo from '../../common/restaurant.js'

import method from '../../tools/commonMethod.js'

export default class Search extends React.Component {
	constructor (props){
		super(props);
		this.state = {
			restaurants: [],
			keyword: '',
			sortStatus: ''
		}
	}
	sendRequest (keyword){
		var that = this;
		this.setState({
			keyword: keyword
		})
		let loca = method.store('loca');
		let url = '/shopping/v1/restaurants/search?latitude='+ loca.lat +'&longitude='+ loca.lnt +'&keyword='+ keyword +'&offset=0&search_item_type=2&limit=20&extras[]=activities'
		fetch(url).then(function(res){
			return res.json()
		}).then(function(data){
			var arr = [];
			var defaultArr = [];
			for(var prop in data){
				data[prop].restaurant_with_foods.map(function(val, i){
					val.restaurant.sortE = i;
					arr.push(val.restaurant);
				})
			}
			that.setState({
				restaurants: arr
			})
		})
	}
	sortRes (sortType, big){
		var arr = this.state.restaurants;
		arr.sort(function(a,b){
			if (big) {
				return b[sortType] - a[sortType];
			}
			return a[sortType] - b[sortType];
		})
		this.setState({
			restaurants: arr
		})
	}
	componentWillMount (){
		this.sendRequest(this.props.match.params.keyword)
		method.factory.sortRes = this.sortRes.bind(this);
	}
	showFilter (val){
		this.setState({
			sortStatus: val
		})
	}
	render (){
		return (
			<div id='search'>
				<HeadInp keyword={this.state.keyword} fn={this.sendRequest.bind(this)} sort={this.state.sortStatus}></HeadInp>
				<SortNav sort={this.state.sortStatus} fn={this.showFilter.bind(this)}></SortNav>
				<section>
					{
						this.state.restaurants.map(function(val, i){
							return <ResInfo data={val} key={i}></ResInfo>
						})
					}
				</section>
			</div>
		)
	}
}
