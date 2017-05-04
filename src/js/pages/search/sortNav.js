import React from 'react'
import classnames from 'classnames'

import method from '../../tools/commonMethod.js'

import SortOptions from './sortOptions.js'

export default class HeadInp extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			sortType: '',
			showing: false
		}
	}
	close(){
		this.setState({
			showing: false
		})
		this.props.fn('');
	}
	sortType (event){
		if (event.target.tagName == 'LI' && !this.state.showing) {
			this.setState({
				showing: true
			})
			this.props.fn(event.target.type);
		} else if (this.state.showing) {
			this.close();
		}
	}
	render (){
		return (
			<div className='sort-nav'>
				<ul onClick={this.sortType.bind(this)}>
					<li type='food'>美食</li>
					<li type='sort'>排序</li>
					<li className='border0' type='filter'>筛选</li>
				</ul>
				<div className={classnames({hide: this.props.sort === ''})}>
					<SortOptions fn={this.close.bind(this)}></SortOptions>
				</div>
			</div>
		)
	}
} 