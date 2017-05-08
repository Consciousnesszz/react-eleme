import React from 'react'

import method from '../../../tools/commonMethod.js'

import Food from '../../../common/food.js'

export default class FoodList extends React.Component {
	componentDidMount (){
		if (!document.getElementsByName('target'+ (this.props.num - 1))[1]) {
			var height = 0;
		} else {
			var height = document.getElementsByName('target'+ (this.props.num - 1))[1].offsetHeight;
			height += method.factory.heightArr[method.factory.heightArr.length - 1];
		}
		method.factory.heightArr.push(height);
	}
	render(){
		return (
			<div className="food-item" name={'target'+ this.props.num}>
				<h4 data-title={ this.props.data.name }>{ this.props.data.name }<span className="s-r-dis">{ this.props.data.description }</span></h4>
				{
					this.props.data.foods.map(function(val, i){
						return <Food key={i} data={val}></Food>
					})
				}
			</div>
		)
	}
}