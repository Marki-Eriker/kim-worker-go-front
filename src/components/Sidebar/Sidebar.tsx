import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/icons/logo.svg'
import { SidebarContainer, SidebarNavigationItem } from './styles'
import { meQuery_user_me_record_navigation_record } from '../../types/meQuery'

interface Props {
  navigation: meQuery_user_me_record_navigation_record[]
}

const Sidebar: React.FC<Props> = ({ navigation }) => {
  const { pathname } = useLocation()

  const nav = navigation.slice().sort(function (a, b) {
    if (a.order > b.order) {
      return 1
    }
    if (a.order < b.order) {
      return -1
    }
    return 0
  })

  return (
    <SidebarContainer className='sidebar'>
      <div className='logo'>
        <img src={logo} alt='logo' />
      </div>
      <ul>
        {nav.map((n) => {
          return (
            <SidebarNavigationItem key={n.id} active={pathname === n.path}>
              <Link to={n.path}>{n.title}</Link>
            </SidebarNavigationItem>
          )
        })}
        {/*{process.env.NODE_ENV === 'development' && (*/}
        {/*  <SidebarNavigationItem active={pathname === '/test'}>*/}
        {/*    <Link to='/test'>Тест</Link>*/}
        {/*  </SidebarNavigationItem>*/}
        {/*)}*/}
      </ul>
    </SidebarContainer>
  )
}

export default Sidebar
