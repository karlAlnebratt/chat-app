const { gql } = require('apollo-server');

const typeDefs = gql`
  type Message {
    id: ID!
    text: String!
    created: String
  }

  type Query {
    messages: [Message]
  }

  type Mutation {
    createMessage(text: String): Message
  }
`

module.exports = typeDefs
