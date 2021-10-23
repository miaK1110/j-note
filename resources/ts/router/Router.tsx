import React, { memo, VFC } from 'react';
import { Route, Switch } from 'react-router-dom';

import { Login } from '../components/pages/Login';

export const Router: VFC = memo(() => {
  return (
    <Switch>
      <Route path="/login">{/* <Login /> */}</Route>
    </Switch>
  );
});
