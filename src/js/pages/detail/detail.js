import React from 'react'
import {Link} from 'react-router-dom'

import Header from './header.js'
import Nav from './nav.js'
import Cart from './cart.js'

class Detail extends React.Component {
	constructor (props){
		super(props);
		this.state = {

		}
	}
	componentWillMount (){
		var url = "https://mainsite-restapi.ele.me/shopping/restaurant/" + this.props.match.params.id;
		fetch(url).then(function(res){
			res.json();
		}).then(function(data){
			console.log(data);
		})
	}
	render (){
		return (
			<div className="section" id="detail">
				<div className="detail-flex">
					<div className="shop-header">
						<Header></Header>
						<Nav></Nav>
					</div>
					<div className="shop-main">
						<div className="smain-left">
							<ul className="food-nav">
								
							</ul>
						</div>
						<div className="smain-right">
							<div className="food-wrap">
								
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
					<Cart></Cart>
				</div>
			</div>
		)
	}
}

export default Detail