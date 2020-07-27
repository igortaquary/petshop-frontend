import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Home from '../pages/LandingPage';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import SingleItemPage from '../pages/SingleItemPage';
import Shop from '../pages/Shop';

const Routes = () => {
  return (
    <Switch>
      <Route path='/login'>
        <Login />
      </Route>
      <Route path='/products/:id' component={SingleItemPage} />
      <Route path='/signup'>
        <SignUp />
      </Route>
      <Route path='/shop'>
        <Shop />
      </Route>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route exact path='*'>
        <Home />
      </Route>
    </Switch>
  );
}

export default withRouter(Routes);