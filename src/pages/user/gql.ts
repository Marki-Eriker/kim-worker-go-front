import { gql } from '@apollo/client'

export const USER_LIST_QUERY = gql`
  query userListQuery($input: UserListInput!) {
    user {
      id
      list(input: $input) {
        ok
        error {
          message
        }
        pagination {
          totalItems
          totalPages
          page
          itemsPerPage
          hasNextPage
          hasPreviousPage
        }
        record {
          id
          email
          fullName
          createdAt
        }
      }
    }
  }
`
