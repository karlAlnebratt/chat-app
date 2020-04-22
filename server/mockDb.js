const { v4: uuidv4 } = require('uuid')
const { ApolloError } = require('apollo-server')

const MESSAGES = []

const USERS = []

const createMessage = ({ text, userId, id = uuidv4(), created = new Date() }) => ({
  id,
  created,
  text,
  user: getUser(userId)
})

const getMessages = () => MESSAGES
const setMessage = message => {
  MESSAGES.push(message)
  return message
}

const createUser = ({ username, id = uuidv4(), created = new Date() }) => ({
  id,
  created,
  username
})

const getUser = id => {
  return USERS.find(({ id: x }) => id === x)
}
const getUsers = () => USERS
const setUser = user => {
  if(USERS.filter(({ username }) => username === user.username).length) {
    throw new ApolloError('Username already exist', 'USERNAME_EXIST')
  }

  USERS.push(user)

  return user
}

module.exports = {
  createMessage,
  getMessages,
  setMessage,
  createUser,
  getUser,
  getUsers,
  setUser
}
