const { gql } = require('apollo-server');

const typeDefs = gql`
  scalar DateTime

  type Message {
    id: ID!
    text: String!
    created: DateTime!
  }

  type User {
    id: ID!
    username: String!
    created: DateTime!
  }

  type Query {
    messages: [Message]
    user(id: ID!): User
    users: [User]
  }

  type Mutation {
    createMessage(text: String): Message
    createUser(username: String): User
  }
`

module.exports = typeDefs
