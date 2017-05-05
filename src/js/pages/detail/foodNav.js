import React from 'react'
import ReactDOM from 'react-dom'

import method from '../../tools/commonMethod.js'

export default class Cart extends React.Component {
	toTarget (event){
		var target = event.target.getAttribute('name');
		method.scroll(target, document.getElementById('scroller'));
	}
	render(){
		var that = this;
		if (this.props.data[0]) {
			return (
				<ul className="food-nav">
				{
					this.props.data.map(function(val, i){
						return (
							<li key={i} name={'target'+i} onClick={that.toTarget.bind(this)}>{val.name}</li>
						)
					})
				}
				</ul>
			)
		} else {
			return <ul className="food-nav"></ul>
		}
	}
}