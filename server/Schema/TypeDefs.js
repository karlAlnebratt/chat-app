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
`

module.exports = typeDefs
