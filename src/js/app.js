import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter as Router, Route, Link} from 'react-router-dom'

import Address from './pages/address/address.js'
import Search from './pages/search/search.js'
import Detail from './pages/detail/detail.js'
import Rlist from './pages/rlist/rlist.js'
import Mine from './pages/mine/mine.js'

import rem from './tools/rem.js'
import icon from '../css/font_bgp7kcvc5o9cz0k9/iconfont.css'
import css from '../css/index.css'

class Container extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			shopId: '',
			searchWord: ''
		}
	}
	render (){
		return (
			<Router>
				<div>
					<Route exact path="/" component={Rlist}/>
					<Route path='/detail/:id' component={Detail}/>
					<Route path='/address' component={Address}/>
					<Route path='/search/:keyword' component={Search}/>
					<Route path='/mine' component={Mine}/>
					<Route path='/search/:keyword' component={Search}/>
				</div>
			</Router>
		)
	}
}

ReactDOM.render(<Container/>, document.getElementById('container'))

