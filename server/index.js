const { ApolloServer } = require('apollo-server');

const { typeDefs, resolvers } = require('./Schema')

const PORT = 4000;

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen({ port: PORT }).then(({ url, subscriptionsUrl }) => {
  console.log(`🚀 Server ready at ${url}`);
});
