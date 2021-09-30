import styled from '@emotion/styled/macro'

export const PaymentFilterContainer = styled.div`
  display: flex;
  align-items: center;
  & .filter {
    cursor: pointer;
    margin-right: 5px;
    border: 2px solid ${(p) => p.theme.secondaryBackground};
    border-radius: 8px;
    padding: 5px 10px;
    transition: border-color 0.2s linear;
    font-size: 12px;

    &:hover {
      border-color: ${(p) => p.theme.colors.secondary.gray700};
    }
  }

  & .active {
    background-color: ${(p) => p.theme.secondaryBackground};
  }
`
