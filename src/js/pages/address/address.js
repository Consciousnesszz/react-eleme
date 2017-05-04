import React from 'react'
import {Link} from 'react-router-dom'

import Input from './input.js'
import Info from './searchInfo.js'

var addrs = [];

class Address extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			text: '',
			addressList: addrs || []
		}
	}
	update (list){
		if (list instanceof Array) {
			this.setState({
				addressList: list
			})
			addrs = list;
		} else {
			this.setState({
				addressList: []
			})
		}
	}
	render (){
		var that = this;
		return (
			<div id='address'>
				<Input fn={that.update.bind(this)}></Input>
				<div className="content has-header">
					{
						this.state.addressList.map(function(value, index){
							return <Info data={value} key={index}></Info>
						})
					}
				</div>
			</div>
		)
	}
}

export default Address