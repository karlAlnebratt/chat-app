const { getMessages } = require('../mockDb')

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    messages: (root, args, context) => getMessages()
  },
}

module.exports = resolvers
