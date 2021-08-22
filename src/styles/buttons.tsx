import styled from '@emotion/styled/macro'

interface IMainButtonProps {
  loading?: boolean
}

export const MainButton = styled.button<IMainButtonProps>`
  border-radius: ${(p) => p.theme.corner.primary};
  background-color: ${(p) => p.theme.colors.primary.blue};
  color: ${(p) => p.theme.colors.primary.white};
  cursor: ${(p) =>
    p.loading ? 'wait' : p.disabled ? 'not-allowed' : 'pointer'};
  opacity: ${(p) => (p.disabled ? '0.2' : '1')};
  transition: filter 0.2s linear;
  padding: 1rem 0.8rem;
  border: transparent;
  outline: none;
  font-weight: 600;
  font-size: 1.4rem;
  letter-spacing: 1px;
  &:hover {
    filter: grayscale(30%);
  }
  &:active {
    filter: opacity(90%);
  }
`

export const FilterButton = styled.button`
  cursor: pointer;
  border: 2px solid ${(p) => p.theme.secondaryBackground};
  background-color: ${(p) => p.theme.colors.primary.white};
  color: ${(p) => p.theme.colors.primary.black};
  transition: all 0.2s linear;
  padding: 5px 10px;
  border-radius: 8px;
  font: inherit;
  font-size: 12px;

  &:hover {
    background-color: ${(p) => p.theme.secondaryBackground};
  }
  &:active {
    background-color: ${(p) => p.theme.secondaryBackground};
    filter: opacity(70%);
  }
`
