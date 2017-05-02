import React from 'react'
import {Link} from 'react-router-dom'

class Rlist extends React.Component {
	render (){
		var geohash = location.hash.split('/')[2];
		if (geohash) {
			var url = 'https://mainsite-restapi.ele.me/v2/pois/' + geohash;
			fetch(url).then(function(res){
				console.log(res);
				return res.json()
			}).then(function(data){
				var title = data.name;
			})	
		} else {
			var title = '请先设置地址哦';
		}

		return (
			<div id='rlist'>
				<Link to='/address'>{title}</Link>
				<Link to='/detail'>detail</Link>
			</div>
		)
	}
}

export default Rlist