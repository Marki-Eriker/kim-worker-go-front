import { gql, useQuery } from '@apollo/client'
import { refreshToken } from '../../types/refreshToken'

const REFRESH_QUERY = gql`
  query refreshToken {
    user {
      id
      refresh {
        ok
        accessToken
        error {
          message
        }
      }
    }
  }
`

const useRefresh = () => {
  return useQuery<refreshToken>(REFRESH_QUERY)
}

export default useRefresh
