import React from 'react';

import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import SessionPage from './pages/SessionPage';

// Ensure that uri matches server uri
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

const App = () => (
  <ApolloProvider client={client}>
    <div>
      <h2>My first Apollo app 🚀</h2>

      <Router>
        <Route exact path="/" component={LoginPage} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/session" component={SessionPage} />
      </Router>

      <LoginPage />
    </div>
  </ApolloProvider>
);

export default App;
