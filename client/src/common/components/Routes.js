import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import Search from '../../pages/search/page';
import HomePage from '../../pages/home/page';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={Search} />
    <Route path="home" component={HomePage} />
  </Route>
);
