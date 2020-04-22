const { GraphQLScalarType } = require('graphql')

const {
  createMessage,
  getMessages,
  setMessage,
  createUser,
  getUser,
  getUsers,
  setUser,
} = require('../mockDb')

const DateTimeResolver = new GraphQLScalarType({
  name: 'DateTime',
  description: 'DateTime as ISO string',
  serialize: (value) =>  value.toISOString(),
  parseValue: (value) => new Date(value),
  parseLiteral: ({ value }) => new Date(value)
})

// A map of functions which return data for the schema.
const resolvers = {
  DateTime: DateTimeResolver,
  Query: {
    messages: (root, args, context) => getMessages(),
    user: (root, { id }, context) => getUser(id),
    users: (root, args, context) => getUsers()
  },
  Mutation: {
    createMessage (root, args, context) {
      const { text, userId } = args
      const message = createMessage({ text, userId })
      return setMessage(message)
    },
    createUser (root, args, context) {
      const { username } = args
      const user = createUser({ username })
      return setUser(user)
    }
  }
}

module.exports = resolvers
