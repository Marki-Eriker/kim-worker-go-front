import { gql } from '@apollo/client'

export const CREATE_FILE_MUTATION = gql`
  mutation createFileMutation($input: FileCreateInput!) {
    file {
      create(input: $input) {
        ok
        error {
          message
        }
        record {
          id
        }
      }
    }
  }
`
