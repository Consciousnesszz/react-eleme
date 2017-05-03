import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter as Router, Route, Link} from 'react-router-dom'

import Address from './pages/address/address.js'
import Detail from './pages/detail/detail.js'
import Rlist from './pages/rlist/rlist.js'

import rem from './tools/rem.js'
import icon from '../css/font_bgp7kcvc5o9cz0k9/iconfont.css'
import css from '../css/index.css'

class Container extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			geohash : ''
		}
	}
	render (){
		return (
			<Router>
				<div>
					<Route exact path="/" component={Rlist}/>
					<Route path='/detail' component={Detail}/>
					<Route path='/address' component={Address}/>
				</div>
			</Router>
		)
	}
}

ReactDOM.render(<Container/>, document.getElementById('container'))

