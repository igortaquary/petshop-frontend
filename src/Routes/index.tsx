import React from 'react';
import Login from '../pages/Login';
import {Switch, Route} from 'react-router-dom';
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
    </Switch>
  );
}

export default Routes;