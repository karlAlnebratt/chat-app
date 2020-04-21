const {
  createMessage,
  getMessages,
  setMessage,
} = require('../mockDb')

// A map of functions which return data for the schema.
const resolvers = {
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
