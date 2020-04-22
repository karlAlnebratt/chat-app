import { ApolloProvider } from '@apollo/client';
import React from 'react';
import ReactDOM from 'react-dom';
import { ErrorBoundary } from 'react-error-boundary';

import 'normalize.css';
import './index.css';

import App from './App';
import Client from './Client';

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={Client}>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
