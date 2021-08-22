import React from 'react'
import styled from '@emotion/styled/macro'
import { useMe } from '../common/hooks'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons/faSpinner'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Header, Sidebar } from '../components'
import { getRoute } from '../common/getRoute'
import { NotFoundPage } from '../pages'

const LoggedInRouter = () => {
  const { data, loading, error } = useMe()

  if (!error && data?.user.me.record?.navigation.ok) {
    return (
      <MainContainer>
        <BrowserRouter>
          <Sidebar navigation={data.user.me.record.navigation.record!} />
          <ContentWithHeaderContainer>
            <Header />
            <Switch>
              {data?.user.me.record.navigation.record?.map((n) => getRoute(n))}
              <Route>
                <NotFoundPage />
              </Route>
            </Switch>
          </ContentWithHeaderContainer>
        </BrowserRouter>
      </MainContainer>
    )
  }

  if (loading) {
    return (
      <SecondaryContainer>
        <FontAwesomeIcon icon={faSpinner} size='6x' pulse color='white' />
      </SecondaryContainer>
    )
  }

  return (
    <SecondaryContainer>
      <span>Server error</span>
    </SecondaryContainer>
  )
}

const MainContainer = styled.div`
  max-width: 1920px;
  height: 100vh;
  background-color: ${(p) => p.theme.secondaryBackground};
  display: flex;
`

const ContentWithHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const SecondaryContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: ${(p) => p.theme.mainBackground};
  font-size: 30px;
  color: ${(p) => p.theme.colors.primary.white};
`

export default LoggedInRouter
