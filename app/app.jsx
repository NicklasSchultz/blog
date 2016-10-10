import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, IndexRoute, browserHistory, hashHistory} from 'react-router';

import NavBar from './jsx/components/Navbar';
import Home from './jsx/components/Home';
import Blog from './jsx/components/Blog';
import About from './jsx/components/About';
import Photos from './jsx/components/Photos';

var destination = document.querySelector("#application");
const routes = (
  <Route path='/' component={NavBar}>
    <IndexRoute component={Home} />
    <Route path='/Home' component={Home} />
    <Route path='/Blog' component={Blog} />
    <Route path='/About' component={About} />
    <Route path='/Photos' component={Photos} />
  </Route>
)

ReactDOM.render(
    <Router history={browserHistory}>
      {routes}
    </Router>,
    destination
);
