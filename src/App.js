import React from 'react';
import { Switch, Route } from "react-router-dom";

import { LoginPage } from './pages';
import { Dashboard } from './pages';
import { SessionPage } from './pages';
import Nav from './routing/Nav';
import PrivateRoute from './routing/PrivateRoute';

// toggle authed to either go to dashboard or login page
const App = () => (
  <div>    
      <Nav />  

      <Switch>
        <PrivateRoute authed={true} exact path='/' component={Dashboard} />
        <Route path="/login" component={LoginPage} />
        <Route path="/session" component={SessionPage} />
      </Switch>
  </div>
);

export default App;
