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
		this.setState({
			addressList: list
		})
		addrs = list;
	}
	render (){
		var that = this;
		return (
			<div id='address'>
				<Input fn={that.update.bind(this)}></Input>
				<div className="content has-header">
					{
						this.state.addressList.map(function(value, index){
							var link = `/rlist/${value.geohash}`;
							return (
								<Link to={link} key={index}>
									<Info data={value}></Info>
								</Link>)
						})
					}
				</div>
			</div>
		)
	}
}

export default Address