import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import client from './client';

ReactDOM.render(
    <BrowserRouter>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </BrowserRouter>, 
    document.getElementById('root')
);

registerServiceWorker();
