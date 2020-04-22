const { gql } = require('apollo-server');

const typeDefs = gql`
  scalar DateTime

  type Message {
    id: ID!
    text: String!
    created: DateTime!
  }

  type Query {
    messages: [Message]
  }

  type Mutation {
    createMessage(text: String): Message
  }
`

module.exports = typeDefs
