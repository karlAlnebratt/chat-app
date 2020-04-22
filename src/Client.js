import { ApolloClient, gql, HttpLink, ApolloLink, InMemoryCache } from '@apollo/client';
import { onError } from "@apollo/link-error";

import {
  IS_LOGGED_IN_QUERY,
} from './Schema'

const cache = new InMemoryCache()

cache.writeQuery({
  query: IS_LOGGED_IN_QUERY,
  data: {
    isLoggedIn: !!localStorage.getItem('userId')
  },
});

const client = new ApolloClient({
  cache,
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError, response }) => {
      if (graphQLErrors)
        graphQLErrors.map(({ message, locations, path }) =>
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
          ),
        );

      if (networkError) console.log(`[Network error]: ${networkError}`);

    }),
    new HttpLink({
      uri: 'http://192.168.1.206:4000',
    })
  ]),
});


export default client
