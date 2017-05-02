import React from 'react'
import {Link} from 'react-router-dom'
import 'whatwg-fetch'

import Header from '../../common/header.js'

class Input extends React.Component {
	search (event){
		var that = this;
		var keyWord = event.target.value;
		var url = 'https://mainsite-restapi.ele.me/bgs/poi/search_poi_nearby?keyword='+ keyWord +'&offset=0&limit=20';
		clearTimeout(that.timer);
		that.timer = setTimeout(function(){
			fetch(url).then(function(res){
				return res.json()
			}).then((data)=>{
				console.log(data);
				that.props.fn(data);
			})
		},300)
	}
	render (){
		return (
			<div className='top-input'>
				<Header text='选择地址'></Header>
				<div className="bar bar-subheader">
				  	<input type='text' placeholder='请输入地址' onChange={this.search.bind(this)} />
				  	<span></span>
				</div>
			</div>
		)
	}
}

export default Input