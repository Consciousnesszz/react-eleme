import React from 'react'

export default class SearchInp extends React.Component {
	sendKey (event){
		if (event.keyCode === 13) {
			location.hash = '/search/' + event.target.value;
		}
	}
	render (){
		return (
			<input type="text" onKeyUp={this.sendKey.bind(this)} className="rl-search" placeholder="搜索商家、商品" />
		)
	}
}


