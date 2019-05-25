import React from 'react';
import { Router, Route } from 'react-router';
import history from '../../utils/history';
import NLayout from '../../components/n-layout';
import asyncComponent from '../../components/async-component';
import { innerRoutes } from '../../config/routes';

const BasePage: React.FC = () => {
  return (
    <Router history={history}>
      <NLayout>
        {innerRoutes.map(route => (
          <Route path={route.path} exact={route.exact} key={route.path} component={asyncComponent(route.importFunc)} />
        ))}
      </NLayout>
    </Router>
  );
};

export default BasePage;
