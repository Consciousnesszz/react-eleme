import React from 'react'

import method from '../tools/commonMethod.js'

class Header extends React.Component {
	back (){
		let hash = location.hash.split('/')[1];
		if (hash === 'detail') {
			method.factory.showShopInfo('100%');
		} else {
			history.back();
		}
	}
	render (){
		return (
			<div className="bar bar-header bar-light">
			  	<h1 className="title"><span onClick={this.back.bind(this)}></span>{this.props.text}</h1>
			</div>
		)
	}
}

export default Header