import React from 'react'

class Info extends React.Component {
	setAddr (){
		location.hash = '/' + this.props.link;
	}
	render (){
		return (
			<div onClick={this.setAddr.bind(this)} className="list-item" data-link={this.props.link}>
				<h4>{this.props.data.name}</h4>
				<p>{this.props.data.address}</p>
			</div>
		)
	}
}

export default Info