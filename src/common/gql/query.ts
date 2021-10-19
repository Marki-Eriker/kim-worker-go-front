import { gql } from '@apollo/client'

export const EMAIL_SEND_QUERY = gql`
  query emailSendQuery($input: EmailSendInput!) {
    email {
      send(input: $input) {
        ok
        error {
          message
        }
      }
    }
  }
`
