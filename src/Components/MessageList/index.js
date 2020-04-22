import React from 'react'
import { useQuery } from '@apollo/client'

import { MESSAGES_QUERY } from '../../Schema'

import './MessageList.css'

function MessageList () {
  const { loading, error, data: { messages = [] } = {} } = useQuery(
    MESSAGES_QUERY,
    {
      pollInterval: 500
    }
  )

  if (loading) return 'Loading...'
  if (error) return 'Something went wrong, pleas try again later'

  return (
    <ol className='message-list'>
      {messages.map(({ id, text, created }) => (
        <li className='message-list__item' key={id}>
          <time className='message-list__time' dateTime={created}>{created}</time>
          <span className='message-list__text'>{text}</span>
        </li>
      ))}
    </ol>
  )
}

export default MessageList
