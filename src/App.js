import React from 'react';
import { Switch, Route } from "react-router-dom";

import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import SessionPage from './pages/SessionPage';
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
