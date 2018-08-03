import React from 'react';

import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";

import LoginPage from './pages/LoginPage';


// Ensure that uri matches server uri
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

const App = () => (
  <ApolloProvider client={client}>
    <div>
      <h2>My first Apollo app 🚀</h2>

      <LoginPage />
    </div>
  </ApolloProvider>
);

export default App;
