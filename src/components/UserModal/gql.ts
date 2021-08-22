import { gql } from '@apollo/client'

export const USER_QUERY = gql`
  query userFindQuery($input: UserFindInput!) {
    user {
      id
      find(input: $input) {
        ok
        error {
          message
        }
        record {
          id
          createdAt
          updatedAt
          email
          fullName
          baseRole
          serviceTypes
          access {
            ok
            error {
              message
            }
            record {
              id
              name
            }
          }
        }
      }
    }
  }
`

export const UPDATE_USER_MAIN_MUTATION = gql`
  mutation updateUserMainMutation($input: UserUpdateMainInput!) {
    user {
      updateMain(input: $input) {
        ok
        error {
          message
        }
        record {
          id
          fullName
          email
          baseRole
        }
      }
    }
  }
`

export const USER_GRANT_REQUEST_ACCESS_MUTATION = gql`
  mutation userGrantRequestAccessMutation(
    $input: UserGrantRequestAccessInput!
  ) {
    user {
      grantRequestAccess(input: $input) {
        ok
        error {
          message
        }
        record {
          id
          serviceTypes
        }
      }
    }
  }
`
