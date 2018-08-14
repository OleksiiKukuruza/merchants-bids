import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MerchantListContainer from '../containers/MerchantListContainer';
import NewMerchantContainer from '../containers/NewMerchantContainer';

const Main = () => (
  <Switch>
    <Route
      path="/merchants/new"
      component={NewMerchantContainer}
    />
    <Route
      path="/merchants"
      component={MerchantListContainer}
    />
  </Switch>
);

export default Main;
