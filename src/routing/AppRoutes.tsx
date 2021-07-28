import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import MainLayout from 'components/MainLayout';
import Login from 'pages/Login';
import Products from 'pages/Products';

import { AppRoute } from './AppRoute.enum';

export const AppRoutes = () => {
  return (
    <Switch>
      <Route path={AppRoute.home} exact>
        <MainLayout>
          <Products />
        </MainLayout>
      </Route>
      <Route path={AppRoute.login}>
        <Login />
      </Route>
      <Redirect to={AppRoute.home} />
    </Switch>
  );
};
