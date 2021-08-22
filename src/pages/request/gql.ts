import { gql } from '@apollo/client'

export const REQUEST_LIST_QUERY = gql`
  query getRequestListQuery($input: RequestListInput!) {
    request {
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
          status
          createdAt
          contractFilledTemplateID
          serviceType {
            ok
            error {
              message
            }
            record {
              id
              name
            }
          }
          contractor {
            ok
            error {
              message
            }
            record {
              id
              shortName
            }
          }
        }
      }
    }
  }
`
