import React, { useRef } from 'react'
import { useMutation } from '@apollo/client'

import { MESSAGES_QUERY, CREATE_MESSAGE } from '../../Schema'

import './MessageForm.css'

const updateMessagesCache = (cache, newMessage) => {
  const { messages } = cache.readQuery({ query: MESSAGES_QUERY })
  cache.writeQuery({
    query: MESSAGES_QUERY,
    data: { messages: messages.concat([newMessage]) }
  })
}

function MessageForm () {
  const inputRef = useRef(null)
  const [createMessage, { loading, error }] = useMutation(CREATE_MESSAGE, {
    update (cache, { data: { createMessage: newMessage } }) {
      updateMessagesCache(cache, newMessage)
    }
  })
  error && console.error(error) // TODO: Handle error

  return (
    <form
      className='message-form'
      onSubmit={e => {
        e.preventDefault()
        const text = inputRef.current.value
        if (text.length) {
          createMessage({ variables: { text } })
          inputRef.current.value = ''
        }
      }}
    >
      <input
        className='message-form__input'
        ref={inputRef}
        type='text'
        placeholder='Start typing your message'
      />
      <button
        className='message-form__submit'
        disabled={loading}
        type='submit'>
        Send
      </button>
    </form>
  )
}

export default MessageForm
