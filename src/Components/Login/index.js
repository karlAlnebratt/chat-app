import { useMutation } from '@apollo/client'
import React, { useRef } from 'react'
import {
  USER_ID,
} from '../../Constants'
import {
  CREATE_USER,
  IS_LOGGED_IN_QUERY,
  USER_QUERY,
} from '../../Schema'

import './Login.css'

const updateUsersCache = (cache, user) => {
  localStorage.setItem(USER_ID, user.id)
  cache.writeQuery({
    query: USER_QUERY,
    data: { user: user }
  })
  cache.writeQuery({
    query: IS_LOGGED_IN_QUERY,
    data: { isLoggedIn: true }
  })
}

function Login () {
  const inputRef = useRef(null)
  const [createUser, { loading, error }] = useMutation(CREATE_USER, {
    update (cache, { data: { createUser: user } }) {
      updateUsersCache(cache, user)
    },
    errorPolicy: 'all'
  })
  let content = 'creating user...'
  if (!loading) {
    content = (
      <form
        className='login-form'
        onSubmit={e => {
          e.preventDefault()
          const username = inputRef.current.value
          if (username.length) {
            createUser({ variables: { username } })
          }
        }}
      >
        <legend className='login-form__title'>
          Create a username to enter the chat
        </legend>
        <input
          ref={inputRef}
          className='login-form__input'
          type='text'
          placeholder='Select a username'
        />
        <button className='login-form__submit' type='submit'>
          OK
        </button>
        {error && <p>Username taken, try a different one</p>}
      </form>
    )
  }


  return <div className='login-wrapper'>{content}</div>
}

export default Login
