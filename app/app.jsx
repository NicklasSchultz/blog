import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, IndexRoute, browserHistory, hashHistory} from 'react-router';

import NavBar from './jsx/components/Navbar';
import Home from './jsx/Pages/Home';
import Blog from './jsx/Pages/Blog';
import About from './jsx/Pages/About';
import Photos from './jsx/Pages/Photos';
import Destinations from './jsx/Pages/Destinations'
import Details from './jsx/Pages/Details'

var destination = document.querySelector("#application");
const routes = (
  <Route path='/' component={NavBar}>
    <IndexRoute component={Home} />
    <Route path='/Home' component={Home} />
    <Route path='/Blog' component={Blog} />
    <Route path='/About' component={About} />
    <Route path='/Photos' component={Photos} />
    <Route path='/Destinations' component={Destinations} />
    <Route path='/Details' component={Details} />
  </Route>
)

ReactDOM.render(
    <Router history={hashHistory}>
      {routes}
    </Router>,
    destination
);
