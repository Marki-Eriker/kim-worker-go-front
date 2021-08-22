import styled from '@emotion/styled/macro'

export const HeaderContainer = styled.div`
  background-color: ${(p) => p.theme.colors.primary.white};
  box-shadow: ${(p) => p.theme.shadow.primary};
  padding: 0 20px;
  min-height: 64px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  & svg {
    cursor: pointer;
    color: ${(p) => p.theme.mainBackground};
    margin-left: 20px;
    transition: opacity 0.2s linear;
    font-size: 25px;
    &:hover {
      opacity: 0.7;
    }
  }
`
