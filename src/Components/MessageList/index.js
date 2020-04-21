import React from 'react'
import { useQuery } from '@apollo/client'
import {
  MESSAGES_QUERY,
} from '../../Schema'


function MessageList () {
  const { loading, error, data: { messages = [] } = {} } = useQuery(
    MESSAGES_QUERY
  )

  if (loading) return 'Loading...'
  if (error) return 'Something went wrong, pleas try again later'

  return (
    <ol>
      {messages.map(({ id, text, created }) => (
        <li key={id}>
          <time dateTime={created}>{created}</time> {text}
        </li>
      ))}
    </ol>
  )
}

export default MessageList
