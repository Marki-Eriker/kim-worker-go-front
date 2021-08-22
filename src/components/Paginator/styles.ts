import styled from '@emotion/styled/macro'

export const PaginatorContainer = styled.div`
  margin-right: 20px;
  display: flex;
  align-items: center;

  & .page {
    font-size: 20px;
    margin: 0 10px;
  }
  & svg {
    cursor: pointer;
    height: 25px !important;
    width: 25px !important;
    transition: opacity 0.2s linear;
    color: ${(p) => p.theme.mainBackground};
    opacity: 0.6;
    &:hover {
      color: ${(p) => p.theme.mainBackground};
      opacity: 1;
    }

    &.disabled {
      opacity: 0.1;
      cursor: not-allowed;
    }
  }
`
