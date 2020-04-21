import {
  ApolloProvider,
} from '@apollo/client'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Client from './Client'

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={Client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

