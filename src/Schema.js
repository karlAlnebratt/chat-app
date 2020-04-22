import {
  gql,
} from '@apollo/client'

const fragments = {
  message:  gql`
    fragment MessageFragment on Message {
      id
      text
      created
    }
  `,
  user:  gql`
    fragment UserFragment on User {
      id
      username
      created
    }
  `
}

export const CREATE_MESSAGE = gql`
  mutation CreateMessage($text: String) {
    createMessage(text: $text) {
      ...MessageFragment
    }
  }
  ${fragments.message}
`

export const MESSAGES_QUERY = gql`
  query GetMessages {
    messages {
      ...MessageFragment
    }
  }
  ${fragments.message}
`

export const CREATE_USER = gql`
  mutation CreateUser($username: String) {
    createUser(username: $username) {
      ...UserFragment
    }
  }
  ${fragments.user}
`

export const USER_QUERY = gql`
  query GetUser {
    user {
      ...UserFragment
    }
  }
  ${fragments.user}
`


export const IS_LOGGED_IN_QUERY = gql`
  query IsLoggedIn {
    isLoggedIn @Client
  }
`
