import React from 'react'

class Header extends React.Component {
	back (){
		history.back();
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