import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { LoginPage, NotFoundPage } from '../pages'

const LoggedOutRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/'>
          <LoginPage />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default LoggedOutRouter
