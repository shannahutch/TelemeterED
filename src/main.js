import React from 'react'
import { render } from 'react-dom'
import App from './modules/App'
render(<App/>, document.getElementById('app'))
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import About from './modules/About'
import Search from './modules/Search'
import Home from './modules/Home'


render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>

      <IndexRoute component={Home}/>

      {/* add the routes here */}
      <Route path="/search" component={Search}/>
        
      <Route path="/about" component={About}/>
    </Route>
  </Router>
), document.getElementById('app'))
