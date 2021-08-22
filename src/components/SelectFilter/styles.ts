import styled from '@emotion/styled/macro'

interface ISelectBlockContainerProps {
  visible: boolean
}

export const SelectFilterContainer = styled.div`
  margin-right: 20px;
  position: relative;
  cursor: pointer;
  font-size: 12px;
  border: 2px solid ${(p) => p.theme.secondaryBackground};
  padding: 5px 10px;
  border-radius: 8px;

  & .icon {
    margin-left: 8px;
  }
`

export const SelectBlockContainer = styled.div<ISelectBlockContainerProps>`
  z-index: 100;
  min-width: 300px;
  display: ${(p) => (p.visible ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: space-between;
  border: 2px solid ${(p) => p.theme.secondaryBackground};
  border-radius: 8px;
  position: absolute;
  left: -1px;
  top: 30px;
  background-color: ${(p) => p.theme.colors.primary.white};

  & span {
    padding: 10px;
    transition: background-color 0.3s linear;
    &:hover {
      background-color: ${(p) => p.theme.secondaryBackground};
    }
  }
`
