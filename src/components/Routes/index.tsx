import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import {routes} from '../../constants/routes';

import Home from '../Pages/Home';
import WorldMap from '../Pages/WorldMap';
import Error from '../Pages/Error';
import SideDrawer from 'components/layout/SideDrawer/SideDrawer';

const Routes = () => {
  const menuItems = [routes.home, routes.worldmap];

  return (
    <BrowserRouter>
      <Switch>
        <SideDrawer menuItems={menuItems}>
          <Route exact path={routes.home.path} component={Home} />
          <Route exact path={routes.worldmap.path} component={WorldMap} />
          <Route path="*" component={Error} />
        </SideDrawer>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
