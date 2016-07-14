import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import Search from '../../pages/search/page';
import Portal from '../../pages/portal/page';
import About from '../../pages/about/page';
import Acknowledgements from '../../pages/acknowledgements/page';
import Home from '../../pages/home/page';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="search" component={Search} />
    <Route path="about" component={AboutUs} />
    <Route path="portal" component={Portal} />
    <Route path="acknowledgements" component={Acknowledgements} />
    <Route path="search" component={Search} />
  </Route>
);
