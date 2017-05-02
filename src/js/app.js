import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter as Router, Route, Link} from 'react-router-dom'

import Address from './pages/address/address.js'
import Detail from './pages/detail/detail.js'
import Rlist from './pages/rlist/rlist.js'

import rem from './common/rem.js'

class Container extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	}
	render (){
		return (
			<Router>
				<div>
					<Route exact path="/" component={Rlist}/>
					<Route path="/rlist/:geohash" component={Rlist}/>
					<Route path='/detail' component={Detail}/>
					<Route path='/address' component={Address}/>
				</div>
			</Router>
		)
	}
}

ReactDOM.render(<Container/>, document.getElementById('container'))

