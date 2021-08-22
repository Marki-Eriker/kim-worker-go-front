import { gql } from '@apollo/client'

export const LOGIN_MUTATION = gql`
  mutation loginMutation($input: UserLoginInput!) {
    user {
      login(input: $input) {
        ok
        accessToken
        error {
          message
        }
      }
    }
  }
`
