import React from 'react'
import {Link} from 'react-router-dom'

import Header from '../../common/header.js'
import Footer from '../../common/footer.js'

import Account from './component/account.js'

export default class Mine extends React.Component {
	render (){
		return (
			<div id='mine'>
				<Header text='我的'></Header>
				<div className='main'>
					<Account></Account>
				</div>
				<Footer></Footer>
			</div>
		)
	}
}