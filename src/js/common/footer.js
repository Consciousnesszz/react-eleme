import React from 'react'
import classnames from 'classnames'

export default class Footer extends React.Component {
	constructor (props){
		super(props);
		this.state = {
			hash: location.hash
		}
	}
	render (){
		return (
			<div className="footer">
				<ul>
					<li><a href="#/" className={classnames({active: this.state.hash === '#/'})}><i className="iconfont icon-changyonglogo40"></i>外卖</a></li>
					<li><a href="#/find" className={classnames({active: this.state.hash === '#/find'})}><i className="iconfont icon-zhinanzhen"></i>发现</a></li>
					<li><a href="#/menu" className={classnames({active: this.state.hash === '#/menu'})}><i className="iconfont icon-cshy-orders"></i>订单</a></li>
					<li><a href="#/mine" className={classnames({active: this.state.hash === '#/mine'})}><i className="iconfont icon-wode"></i>我的</a></li>
				</ul>
			</div>
		)
	}
}