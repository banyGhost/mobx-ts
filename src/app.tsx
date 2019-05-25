import React from 'react';
import { Router, Route } from 'react-router';
import asyncComponent from './components/async-component';
import history from './utils/history';
import { outerRoutes } from './config/routes';

const App: React.FC = () => {
  return (
    <Router history={history}>
      {outerRoutes.map(route => (
        <Route path={route.path} component={asyncComponent(route.importFunc)} key={route.path} />
      ))}
    </Router>
  );
};

export default App;
