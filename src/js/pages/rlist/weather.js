import React from 'react'
import method from '../../tools/commonMethod.js'

export default class Weather extends React.Component {
	render (){
		var img_path = method.getImg(this.props.data, 'image_hash') + '?imageMogr/format/webp/thumbnail/!69x69r/gravity/Center/crop/69x69/';
		return (
			<div className='weather'>
				<div className='des'>
					<p>{this.props.data.temperature}°</p>
					<p>{this.props.data.description}</p>
				</div>
				<div className='pic'>
					<img src= {img_path}/>
				</div>
			</div>
		)
	}
}