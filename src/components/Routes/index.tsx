import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import * as routes from '../../constants/routes';

import Home from '../Pages/Home';
import Error from '../Pages/Error';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={routes.home.path} component={Home} />
        <Route path="*" component={Error} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
