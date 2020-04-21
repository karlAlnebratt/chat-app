import React from 'react'
import { useQuery, gql } from '@apollo/client'

const MESSAGES_QUERY = gql`
  query GetMessages {
    messages {
      id
      text
      created
    }
  }
`

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
