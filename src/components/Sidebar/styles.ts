import styled from '@emotion/styled/macro'

export const SidebarContainer = styled.div`
  width: 250px;
  background-color: ${(p) => p.theme.mainBackground};
  min-height: 100px;
  padding: 24px;
  display: flex;
  flex-direction: column;

  & .logo {
    display: flex;
    justify-content: center;

    & img {
      width: 150px;
      transform: translateX(10px);
    }
  }

  & ul {
    list-style: none;
    margin-top: 60px;
  }
`

interface SidebarNavigationItemProps {
  active: boolean
}

export const SidebarNavigationItem = styled.li<SidebarNavigationItemProps>`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 15px;

  & a {
    color: ${(p) => p.theme.colors.primary.white};
    position: relative;
    transition: color 0.2s linear;

    &:hover {
      color: ${(p) => p.theme.colors.secondary.gray800};
    }

    &:before {
      position: absolute;
      left: -12px;
      top: 39%;
      content: '';
      width: 5px;
      height: 5px;
      border-radius: 2px;
      background-color: ${(p) => p.active && p.theme.colors.secondary.gray800};
    }
  }
`
