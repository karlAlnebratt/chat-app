import {
  useQuery,
} from '@apollo/client'
import React, {
  
} from 'react'
import Login from './Components/Login'
import MessageForm from './Components/MessageForm'
import MessageList from './Components/MessageList'
import {
  IS_LOGGED_IN_QUERY,
} from './Schema'

import './App.css'

function App () {
  const { loading, error, data: { isLoggedIn } } = useQuery(IS_LOGGED_IN_QUERY)
  let content = 'Loading'

  if(!loading && !error && !isLoggedIn) {
    content = <Login />
  }

  if(!loading && !error && isLoggedIn) {
    content = (
      <>
        <div className='messages-wrapper'>
          <MessageList />
        </div>
        <div className='form-wrapper'>
          <MessageForm />
        </div>
      </>
    )
  }

  if(error) {
    content = 'Something went wrong pleas try again later'
  }

  return (
    <div className='chat-app'>
      {content}
    </div>
  )
}

export default App
