import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  makeVar,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { LOCALSTORAGE_TOKEN } from './common/constant'
import { isExpired } from 'react-jwt'

import possibleTypes from '../src/common/possibleTypes.json'

const token = localStorage.getItem(LOCALSTORAGE_TOKEN)

export const isLoggedInVar = makeVar(token ? !isExpired(token) : false)
export const authTokenVar = makeVar(token)
const fileLink =
  process.env.NODE_ENV === 'production'
    ? process.env.REACT_APP_FILE_LINK_PROD
    : process.env.REACT_APP_FILE_LINK_DEV
export const fileLinkVar = makeVar(fileLink)

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_GRAPHQL_LINK,
  credentials: 'include',
})

const contextLink = setContext(async (_, { headers }) => {
  if (token ? isExpired(token) : true) {
    try {
      const res = await fetch(process.env.REACT_APP_GRAPHQL_LINK!, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          query: '{user{refresh{ ok error {message} accessToken }}}',
        }),
      })

      const {
        data: {
          user: { refresh },
        },
      } = await res.json()

      if (!refresh.ok) {
        isLoggedInVar(false)
      }

      if (refresh.accessToken) {
        authTokenVar(refresh.accessToken)
        localStorage.setItem(LOCALSTORAGE_TOKEN, refresh.accessToken)
      }
    } catch (error) {
      isLoggedInVar(false)
    }
  }

  const newToken = localStorage.getItem(LOCALSTORAGE_TOKEN)

  return {
    headers: {
      ...headers,
      'X-JWT': newToken ? newToken : '',
    },
  }
})

export const client = new ApolloClient({
  link: contextLink.concat(httpLink),
  cache: new InMemoryCache({
    possibleTypes,
    typePolicies: {
      Query: {
        fields: {
          isLoggedIn: {
            read() {
              return isLoggedInVar()
            },
          },
          token: {
            read() {
              return authTokenVar()
            },
          },
        },
      },
    },
  }),
})
