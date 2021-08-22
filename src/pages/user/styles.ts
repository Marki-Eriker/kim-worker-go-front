import styled from '@emotion/styled/macro'

export const UserPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  position: relative;

  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: ${(p) => p.theme.mainBackground};
  }

  &::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 7px;
  }
`

export const Card = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  box-shadow: ${(p) => p.theme.shadow.primary};
`

export const CardTitle = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: ${(p) => p.theme.colors.primary.white};
  border-bottom: 2px solid ${(p) => p.theme.secondaryBackground};
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  height: 50px;

  & div:nth-of-type(1) {
    margin-left: auto;
  }

  & .paginationSize {
    font-size: 12px;
    & span {
      cursor: pointer;
      font-size: 14px;
      margin-left: 5px;
    }

    & span.active {
      font-weight: bold;
      font-size: 16px;
    }
  }
`

export const CardSubTitle = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: ${(p) => p.theme.colors.secondary.gray500};
  border-bottom: 1px solid ${(p) => p.theme.secondaryBackground};
  height: 50px;

  & div:nth-of-type(1) {
    flex-basis: 35px;
  }

  & div:nth-of-type(2) {
    flex-basis: 350px;
  }

  & div:nth-of-type(3) {
    flex-basis: 250px;
  }
`

export const CardRow = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: ${(p) => p.theme.colors.primary.white};
  height: 50px;
  font-size: 14px;
  font-weight: 400;
  position: relative;

  & div:nth-of-type(1) {
    flex-basis: 35px;
  }

  & div:nth-of-type(2) {
    flex-basis: 350px;
  }

  & div:nth-of-type(3) {
    flex-basis: 250px;
    margin-right: auto;
  }

  & div:nth-of-type(4) {
    margin-right: 0;
  }
`

interface ITableItemProps {
  alignCenter?: boolean
}

export const TableItem = styled.div<ITableItemProps>`
  margin-right: 20px;
  //background-color: lightblue;
  //border: 1px solid white;
  display: flex;
  align-items: center;
  justify-content: ${(p) => (p.alignCenter ? 'center' : 'flex-start')};

  & svg {
    cursor: pointer;
    color: ${(p) => p.theme.mainBackground};
    opacity: 0.6;
    transition: opacity 0.2s linear;
    &:hover {
      opacity: 0.9;
    }
  }
`
