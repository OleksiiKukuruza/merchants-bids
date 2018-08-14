import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MerchantListContainer from '../containers/MerchantListContainer';
import NewMerchantContainer from '../containers/NewMerchantContainer';
import EditMerchantContainer from '../containers/EditMerchantContainer';

const Main = () => (
  <Switch>
    <Route path="/merchants/:id/edit" component={EditMerchantContainer} />
    <Route path="/merchants/new" component={NewMerchantContainer} />
    <Route path="/merchants" component={MerchantListContainer} />
  </Switch>
);

export default Main;
