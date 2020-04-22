import { useQuery } from '@apollo/client'
import React from 'react'
import Login from './Components/Login'
import MessageForm from './Components/MessageForm'
import MessageList from './Components/MessageList'
import { IS_LOGGED_IN_QUERY, USER_QUERY } from './Schema'

import './App.css'

const wrapper = children => <div className='chat-app'>{children}</div>

function App () {
  const {
    loading,
    error,
    data: { isLoggedIn } = {}
  } = useQuery(IS_LOGGED_IN_QUERY)
  const {
    loading: loadingUser,
    error: errorUser,
    data: { user } = {}
  } = useQuery(USER_QUERY, { variables: { id: localStorage.getItem('userId') } })
  if (loading || loadingUser) {
    return wrapper('Loading...')
  }

  if (error || errorUser) {
    return wrapper('Something went wrong pleas try again later')
  }

  if (!isLoggedIn) {
    return wrapper(<Login />)
  }

  return wrapper(
    <>
      <div className='messages-wrapper'>
        <MessageList user={user} />
      </div>
      <div className='form-wrapper'>
        <MessageForm user={user} />
      </div>
    </>
  )
}

export default App
