import { gql } from '@apollo/client'

export const LOGOUT_MUTATION = gql`
  mutation logoutMutation {
    user {
      logout {
        ok
        error {
          message
        }
      }
    }
  }
`
