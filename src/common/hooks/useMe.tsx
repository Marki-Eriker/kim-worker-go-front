import { gql, useQuery } from '@apollo/client'
import { meQuery } from '../../types/meQuery'

const ME_QUERY = gql`
  query meQuery {
    user {
      id
      me {
        ok
        error {
          message
        }
        record {
          id
          email
          fullName
          baseRole
          serviceTypes
          navigation {
            ok
            error {
              message
            }
            record {
              id
              path
              title
              description
              icon
              parentId
              node
              order
            }
          }
        }
      }
    }
  }
`

const useMe = () => {
  return useQuery<meQuery>(ME_QUERY)
}

export default useMe
