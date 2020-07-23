import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/LandingPage';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';

const Routes = () => {
  return (
    <Switch>
      <Route path='/login'>
        <Login />
      </Route>
      <Route path='/signup'>
        <SignUp />
      </Route>
      <Route path='/'>
        <Home />
      </Route>
    </Switch>
  );
}

export default Routes;