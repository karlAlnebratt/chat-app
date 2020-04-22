import classname from 'classname'
import PropTypes from 'prop-types'
import React, { useEffect, useRef } from 'react'
import { useQuery } from '@apollo/client'

import { MESSAGES_QUERY } from '../../Schema'
import DateTime from '../DateTime'

import './MessageList.css'

function MessageList ({ user }) {
  const refContainer = useRef(null)
  const { loading, error, data: { messages = [] } = {} } = useQuery(
    MESSAGES_QUERY,
    {
      pollInterval: 500
    }
  )

  useEffect(() => {
    const el = refContainer.current ? refContainer.current.lastChild : null
    el && el.scrollIntoView()
  }, [messages.length])

  if (loading) return 'Loading...'
  if (error) return 'Something went wrong, pleas try again later'

  return (
    <ol ref={refContainer} className='message-list'>
      {messages.map(({ id, text, created, user: { username, id: userId } }) => (
        <li
          className={classname('message-list__item', {
            'message-list__item--own': user.id === userId
          })}
          key={id}
        >
          <span className='message-list__info'>
            {username}: <DateTime dateString={created} />
          </span>
          <span className='message-list__text'>{text}</span>
        </li>
      ))}
    </ol>
  )
}

MessageList.propType = {
  user: PropTypes.object.isRequired
}

export default MessageList
