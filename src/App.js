import React from 'react'
import MessageForm from './Components/MessageForm'
import MessageList from './Components/MessageList'

import './App.css'

function App () {
  return (
    <div className='chat-app'>
      <div className='messages-wrapper'>
        <MessageList />
      </div>
      <div className='form-wrapper'>
        <MessageForm />
      </div>
    </div>
  )
}

export default App
