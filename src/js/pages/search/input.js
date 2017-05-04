import React from 'react'
import classnames from 'classnames'

import method from '../../tools/commonMethod.js'

export default class HeadInp extends React.Component {
	constructor (props){
		super(props);
		this.state = {
			value: this.props.keyword
		}
	}
	back (){
		history.back()
	}
	search (event){
		this.setState({
			value: event.target.value
		})
		var that = this;
		var keyword = event.target.value;
		clearTimeout(that.timer);
		that.timer = setTimeout(function(){
			that.props.fn(keyword);
		},300)
	}
	clear (event){
		this.setState({
			value: ''
		})
	}
	render (){
		return (
			<div className='search-inp'>
				<span className='s-back' onClick={this.back.bind(this)}></span>
				<input type='text' placeholder='请输入商品名称' value={this.state.value} onChange={this.search.bind(this)}/>
				<i className={classnames({cancel: this.state.value})} onClick={this.clear.bind(this)}></i>
				<div className={classnames({cloth: this.props.sort !== ''})}></div>
			</div>
		)
	}
} 