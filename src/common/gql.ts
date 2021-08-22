import { gql } from '@apollo/client'

export const CORE_OUTPUT_FIELDS = gql`
  fragment coreOutputFields on CoreOutput {
    ok
    error {
      message
    }
  }
`
