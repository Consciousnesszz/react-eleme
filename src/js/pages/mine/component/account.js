import React from 'react'
import {Link} from 'react-router-dom'
import classnames from 'classnames'

export default class Account extends React.Component {
	constructor (props){
		super(props);
		this.state = {
			isLogin: false
		}
	}
	render (){
		
		return (
			<div className='account'>
				<div className='m-a-top'>
					<dl>
						<dt className='user-img'>
							<svg viewBox="0 0 122 122" id="avatar-default" width="100%" height="100%"><path fill="#DCDCDC" fillRule="evenodd" d="M61 121.5c33.413 0 60.5-27.087 60.5-60.5S94.413.5 61 .5.5 27.587.5 61s27.087 60.5 60.5 60.5zm12.526-45.806c-.019 3.316-.108 6.052.237 9.825 3.286 8.749 18.816 9.407 28.468 17.891-1.833 1.998-6.768 6.788-15 10.848-7.02 3.463-16.838 6.416-24.831 6.416-17.366 0-32.764-7.149-42.919-17.264 9.713-8.407 25.49-9.173 28.769-17.891.345-3.773.258-6.509.24-9.825l-.004-.002c-1.903-.985-5.438-7.268-6.01-12.571-1.492-.12-3.843-1.561-4.534-7.247-.37-3.053 1.107-4.77 2.004-5.31-5.046-19.212 1.507-33.16 20.749-34.406 5.753 0 10.18 1.52 11.909 4.523 15.35 2.702 11.756 22.658 9.328 29.882.899.54 2.376 2.258 2.004 5.31-.689 5.687-3.042 7.127-4.534 7.248-.575 5.305-3.25 10.82-5.873 12.57l-.003.003zM61 120.5C28.14 120.5 1.5 93.86 1.5 61S28.14 1.5 61 1.5s59.5 26.64 59.5 59.5-26.64 59.5-59.5 59.5z"></path></svg>
						</dt>
						<dd className='user-info'>
							<p>{this.isLogin? 'handsome man': '登录/注册'}</p>
							<span>{this.isLogin? '183****6666': '登录后享受更多特权'}</span>
							<i className='icon-arrow'></i>
						</dd>
					</dl>
				</div>
				<div className='m-a-bottom'>
					<div className='info-item'>
						<p className={ classnames(this.state.isLogin ? 'orange' : 'not-orange')}>{ this.state.isLogin? '34.00<span>元</span>' : ''}</p>
						<span>余额</span>
					</div>
					<div className='info-item'>
						<p className={ classnames(this.state.isLogin ? 'red' : 'not-red')}>{ this.state.isLogin? '0<span>个</span>' : ''}</p>
						<span>优惠</span>
					</div>
					<div className='info-item'>
						<p className={ classnames(this.state.isLogin ? 'green' : 'not-green')}>{ this.state.isLogin? '5600<span>分</span>' : ''}</p>
						<span>积分</span>
					</div>
				</div>
			</div>
		)
	}
}