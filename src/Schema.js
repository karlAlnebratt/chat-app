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
