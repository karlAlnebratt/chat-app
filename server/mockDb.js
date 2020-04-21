const { v4: uuidv4 } = require('uuid')

const MESSAGES = []

const createMessage = ({
  text,
  id = uuidv4(),
  created = new Date()
}) => ({ id, created, text })

const getMessages = () => MESSAGES
const setMessage = (message) => {
  MESSAGES.push(message)
}

module.exports = {
  createMessage,
  getMessages,
  setMessage,
}
// DEBUG
setMessage(createMessage({ text: 'This is a test message' }))
setTimeout(() => {
  setMessage(createMessage({ text: 'This is a second test message' }))
}, 1000)
setTimeout(() => {
  setMessage(createMessage({ text: 'This is a third test message' }))
}, 2000)

