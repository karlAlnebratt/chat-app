const { GraphQLScalarType } = require('graphql')

const {
  createMessage,
  getMessages,
  setMessage,
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
    messages: (root, args, context) => getMessages()
  },
  Mutation: {
    createMessage (root, args, context) {
      const { text } = args
      const message = createMessage({ text })
      setMessage(message)
      return message
    }
  }
}

module.exports = resolvers
