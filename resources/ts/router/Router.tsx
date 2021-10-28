import React, { memo, VFC } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Header } from '../components/organisms/layout/Header';

import { Login } from '../components/pages/Login';
import { Toppage } from '../components/pages/Toppage';
import { Signup } from '../components/pages/Signup';

export const Router: VFC = memo(() => {
  return (
    <Switch>
      <Route exact path="/">
        <Header />
        <Toppage />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
    </Switch>
  );
});
