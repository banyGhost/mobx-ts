import React from 'react';
import {Router, Route} from 'react-router';
import history from './utils/history';
import NLayout from './components/n-layout';
import asyncComponent from './components/async-component';
import {RouteProps} from 'react-router-dom';

interface NRoute extends RouteProps {
  importFunc: Function,
  key: string
}

const routes: NRoute[] = [
  {
    path: '/',
    key: '1',
    exact: true,
    importFunc: () => import('./views/index')
  },
  {
    path: '/user',
    key: '2',
    exact: true,
    importFunc: () => import('./components/j-form')
  }
];

const App: React.FC = () => {
  return (
    <NLayout>
      <Router history={history}>
        {
          routes.map(route =>
            <Route {...route}  component={asyncComponent(route.importFunc)} />
          )
        }
      </Router>
    </NLayout>
  );
};

export default App;
