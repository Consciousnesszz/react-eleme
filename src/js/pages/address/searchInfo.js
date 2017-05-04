import React from 'react'
import method from '../../tools/commonMethod.js'

class Info extends React.Component {
	setAddr (){
		method.store('loca', {
			geohash: this.props.data.geohash,
			lat : this.props.data.latitude,
			lnt : this.props.data.longitude
		})
		location.hash = '/';
	}
	render (){
		return (
			<div onClick={this.setAddr.bind(this)} className="list-item">
				<h4>{this.props.data.name}</h4>
				<p>{this.props.data.address}</p>
			</div>
		)
	}
}

export default Info