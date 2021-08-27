import React from 'react';
import { BrowserRouter, Switch, Redirect } from 'react-router-dom';
import { Route } from './Route';

import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact path="/" to="/home" />
        <Route path="/home" component={Home} />
        <Route path="/dashboard" component={Dashboard} isPrivate />
      </Switch>
    </BrowserRouter>
  );
}
