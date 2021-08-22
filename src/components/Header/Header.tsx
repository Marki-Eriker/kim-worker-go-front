import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useMe } from '../../common/hooks'
import { HeaderContainer } from './styles'
import {
  faSignOutAlt,
  faSpinner,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import { Link, useHistory } from 'react-router-dom'
import { loginMutation } from '../../types/loginMutation'
import { authTokenVar, client, isLoggedInVar } from '../../apollo'
import { LOCALSTORAGE_TOKEN } from '../../common/constant'
import { useMutation } from '@apollo/client'
import { LOGOUT_MUTATION } from './gql'

const Header = () => {
  const { data: meData, loading: meLoading } = useMe()
  const history = useHistory()

  const onCompleted = async () => {
    isLoggedInVar(false)
    await client.cache.reset()
    localStorage.setItem(LOCALSTORAGE_TOKEN, '')
    authTokenVar(null)
    history.push('/')
  }

  const [logoutMutation, { loading }] = useMutation<loginMutation>(
    LOGOUT_MUTATION,
    { onCompleted },
  )

  const onLogoutClick = () => {
    logoutMutation()
  }

  if (meLoading) {
    return (
      <HeaderContainer>
        <FontAwesomeIcon icon={faSpinner} pulse />
      </HeaderContainer>
    )
  }

  return (
    <HeaderContainer>
      <h2>{meData?.user.me.record?.fullName}</h2>
      {/*<Link to='/notification'>*/}
      {/*  <FontAwesomeIcon icon={faEnvelope} />*/}
      {/*</Link>*/}
      <Link to='/profile'>
        <FontAwesomeIcon icon={faUser} />
      </Link>
      <FontAwesomeIcon
        icon={loading ? faSpinner : faSignOutAlt}
        pulse={loading}
        onClick={onLogoutClick}
      />
    </HeaderContainer>
  )
}

export default Header
