import React from 'react';
import MessageForm from './Components/MessageForm'
import MessageList from './Components/MessageList'

import './App.css';

function App() {
  return (
    <div className="chat-app">
      <MessageList />
      <MessageForm />
    </div>
  )
}

export default App;
