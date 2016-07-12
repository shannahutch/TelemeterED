import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import Search from '../../pages/search/page';
import Home from '../../pages/home/page';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="search" component={Search} />
  </Route>
);
