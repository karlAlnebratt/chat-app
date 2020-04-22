import React from 'react'
import { useQuery } from '@apollo/client'

import { MESSAGES_QUERY } from '../../Schema'
import DateTime from '../DateTime'

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
          <span className='message-list__time'><DateTime dateString={created}/></span>
          <span className='message-list__text'>{text}</span>
        </li>
      ))}
    </ol>
  )
}

export default MessageList
