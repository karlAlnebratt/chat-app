import { ApolloClient, gql, HttpLink, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'http://localhost:4000',
  })
});

export default client

// DEBUG
client.query({
  query: gql`
    {
      messages {
        text
      }
    }
  `
}).then((result) => {
  console.log(result)
})
