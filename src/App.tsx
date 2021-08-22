import React from 'react'
import { useReactiveVar } from '@apollo/client'
import { isLoggedInVar } from './apollo'
import { LoggedInRouter, LoggedOutRouter } from './routers'

const App = () => {
  const isLoggedIn = useReactiveVar(isLoggedInVar)
  return isLoggedIn ? <LoggedInRouter /> : <LoggedOutRouter />
}

export default App
