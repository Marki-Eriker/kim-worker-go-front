import { gql } from '@apollo/client'

export const CONTRACT_LIST_QUERY = gql`
  query contractListQuery($input: ContractListInput!) {
    contract {
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
          number
          createdAt
          fileStorageItemID
          contractor {
            ok
            error {
              message
            }
            record {
              id
              fillName
            }
          }
        }
      }
    }
  }
`
