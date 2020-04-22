const { gql } = require('apollo-server');

const typeDefs = gql`
  scalar DateTime

  type User {
    id: ID!
    username: String!
    created: DateTime!
  }

  type Message {
    id: ID!
    user: User!
    text: String!
    created: DateTime!
  }

  type Query {
    messages: [Message]
    user(id: ID): User
    users: [User]
  }

  type Mutation {
    createMessage(text: String userId: ID): Message
    createUser(username: String): User
  }
`

module.exports = typeDefs
