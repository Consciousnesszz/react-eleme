import React from 'react'
import ReactSwipe from 'react-swipe'
import classnames from 'classnames'

import method from '../../tools/commonMethod.js'

export default class Swipe extends React.Component {
	constructor (props){
		super(props);
		this.state = {
			index: 0
		}
	}
	render (){
		var that = this;
		return (
			<div className='swipe-wrap'>
				<ReactSwipe className="carousel" swipeOptions={{continuous: false, callback: function(index){that.setState({index: index})}}}>
	                <div className='swipe'>
	                	{
	                		this.props.data.slice(0, 8).map(function(value, index){
	                			var img_path = method.getImg(value, 'image_url')
	                			return (
	                				<div className='swipe-item' key={index}>
	                					<img src={img_path}/>
	                					<p>{value.title}</p>
	                				</div>
	                			)
	                		})
	                	}
	                </div>
	                <div className='swipe'>
	                	{
	                		this.props.data.slice(8, 16).map(function(value, index){
	                			var img_path = method.getImg(value, 'image_url')
	                			return (
	                				<div className='swipe-item' key={index}>
	                					<img src={img_path}/>
	                					<p>{value.title}</p>
	                				</div>
	                			)
	                		})
	                	}
	                </div>
	            </ReactSwipe>
	            <ul id='position'>
	            	<li className={classnames({'cur': this.state.index === 0})}></li>
	            	<li className={classnames({'cur': this.state.index === 1})}></li>
	            </ul>
	        </div>
		)
	}
}
