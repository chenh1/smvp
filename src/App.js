import React from 'react';

import { Switch, Route, Link } from "react-router-dom";
import { withRouter } from 'react-router';

import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import SessionPage from './pages/SessionPage';

const Nav = withRouter(() => (
  <ul>
    <li>
      <Link to="/">Login Page</Link>
    </li>
    <li>
      <Link to="/dashboard">Dashboard</Link>
    </li>
    <li>
      <Link to="/session">Session Page</Link>
    </li>
  </ul>
));

const App = () => (
  <div>    
      <Nav />  

      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/session" component={SessionPage} />
      </Switch>
  </div>
);

export default App;
