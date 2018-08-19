import React from 'react';
import { Switch, Route } from "react-router-dom";
import { withStateHandlers } from 'recompose';

import { LoginPage, Dashboard, SessionPage } from './pages';
import Nav from './routing/Nav';
import PrivateRoute from './routing/PrivateRoute';

// toggle authed to either go to dashboard or login page
const App = ({ authed, email, sessionIds, loginSuccess }) => (
  <div>    
      <Nav />  

      <Switch>
        <PrivateRoute authed={authed} exact path='/' component={Dashboard} />
        <Route path="/login" render={() => <LoginPage loginSuccess={loginSuccess} />} />
        <Route path="/session" component={SessionPage} />
      </Switch>
  </div>
);

export default withStateHandlers(
  () => ({
    authed: false,
    email: '',
    sessionIds: []
  }),
  {
    loginSuccess: () => ({ EMAIL, SESSION_IDS }) => ({
      authed: true,
      email: EMAIL,
      sessionIds: SESSION_IDS
    })
  }
)(App);
