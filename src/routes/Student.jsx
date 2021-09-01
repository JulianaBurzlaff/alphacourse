import React from 'react';
import { BrowserRouter, Switch, useRouteMatch } from 'react-router-dom';
import { Route } from './Route';

import StudentDashboard from '../components/StudentDashboard';

export default function StudentRouter() {
  const { path } = useRouteMatch();

  return (
    <BrowserRouter>
      <Switch>
        <Route path={path} component={StudentDashboard} isPrivate />
      </Switch>
    </BrowserRouter>
  );
}
