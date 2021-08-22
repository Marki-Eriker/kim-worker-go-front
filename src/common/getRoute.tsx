import { meQuery_user_me_record_navigation_record } from '../types/meQuery'
import { Route } from 'react-router-dom'
import { ContractPage, MainPage, RequestPage, UserPage } from './../pages'

export const getRoute = (n: meQuery_user_me_record_navigation_record) => {
  switch (true) {
    case n.path === '/':
      return (
        <Route key={n.id} path={n.path} exact>
          <MainPage />
        </Route>
      )
    case n.path === '/request':
      return (
        <Route key={n.id} path={n.path} exact>
          <RequestPage />
        </Route>
      )
    case n.path === '/users':
      return (
        <Route key={n.id} path={n.path} exact>
          <UserPage />
        </Route>
      )
    case n.path === '/contract':
      return (
        <Route key={n.id} path={n.path} exact>
          <ContractPage />
        </Route>
      )
    default:
      return null
  }
}
