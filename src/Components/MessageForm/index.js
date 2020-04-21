import { useMutation } from '@apollo/client'
import React, { useRef } from 'react'
import {
  CREATE_MESSAGE,
} from '../../Schema'


function MessageForm () {
  const inputRef = useRef(null)
  const [createMessage, { loading, error }] = useMutation(CREATE_MESSAGE)
  error && console.error(error) // TODO: Handle error

  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      createMessage({ variables: { text: inputRef.current.value } })
      inputRef.current.value = ''
    }}>
      <input ref={inputRef} type="text" placeholder="Start typing your message" />
      <button disabled={loading} type="submit">Send</button>
    </form>
  )
}

export default MessageForm
