import styled from '@emotion/styled/macro'

interface IRequestStatusModalContainer {
  load?: boolean
}

export const RequestStatusModalContainer = styled.div<IRequestStatusModalContainer>`
  display: flex;
  flex-direction: column;
  justify-content: ${(p) => (p.load ? 'center' : 'flex-start')};
  align-items: ${(p) => (p.load ? 'center' : 'stretch')};
  border-radius: ${(p) => p.theme.corner.primary};
  box-shadow: ${(p) => p.theme.shadow.primary};
  position: absolute;
  top: 12%;
  left: 50%;
  transform: translateX(-50%);
  width: 800px;
  min-height: 500px;
  background-color: ${(p) => p.theme.colors.primary.white};
  padding: 20px 20px 50px;

  & .close {
    position: absolute;
    right: 10px;
    top: 10px;
    cursor: pointer;
    color: ${(p) => p.theme.mainBackground};
    opacity: 0.6;
    transition: opacity 0.2s linear;

    &:hover {
      opacity: 0.9;
    }
  }

  & h2 {
    align-self: center;
  }
`

export const CardSubTitle = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: ${(p) => p.theme.colors.secondary.gray500};
  border-bottom: 1px solid ${(p) => p.theme.secondaryBackground};
  height: 50px;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  margin-top: 20px;
`

export const CardRow = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: ${(p) => p.theme.colors.primary.white};
  height: 50px;
  font-size: 14px;
  font-weight: 400;
  border-bottom: 1px solid ${(p) => p.theme.secondaryBackground};

  & .status {
    cursor: pointer;
    margin-right: 10px;
    border: 2px solid ${(p) => p.theme.secondaryBackground};
    border-radius: 8px;
    padding: 10px 5px;
    transition: border-color 0.2s linear;
    font-size: 12px;

    &:hover {
      border-color: ${(p) => p.theme.colors.secondary.gray700};
    }
  }

  & .active {
    background-color: ${(p) => p.theme.secondaryBackground};
  }

  & a {
    position: absolute;
    right: 1px;
  }

  & a:nth-of-type(1) {
    top: 6px;
  }

  & a:nth-of-type(2) {
    bottom: 6px;
  }
`

export const UploadFormContainer = styled.div`
  padding: 10px 10px 55px;
  height: 200px;
  width: 100%;
  background-color: ${(p) => p.theme.colors.primary.white};
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  box-shadow: ${(p) => p.theme.shadow.primary};

  & form {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    outline: 2px dashed ${(p) => p.theme.colors.primary.blue};
    outline-offset: -12px;
    background-color: ${(p) => p.theme.secondaryBackground};
    color: ${(p) => p.theme.colors.primary.black};
    border-radius: 8px;

    & .uploadResult {
      position: absolute;
      font-size: 12px;
      left: 17px;
      top: 15px;
    }

    & label {
      font-size: 14px;
      font-weight: bold;
      margin-top: 10px;
      opacity: 0.5;
      transition: opacity 0.2s linear;
    }

    & label:hover {
      cursor: pointer;
      opacity: 1;
    }

    & input[type='file'] {
      width: 0.1px;
      height: 0.1px;
      opacity: 0;
      position: absolute;
      z-index: -10;
    }

    & .inputButton {
      position: absolute;
      bottom: -45px;
      width: 100%;
    }
  }

  & .docNumber {
    position: absolute;
    left: 15px;
    bottom: 15px;
    outline: none;
    border: 1px solid ${(p) => p.theme.colors.secondary.gray700};
    border-radius: ${(p) => p.theme.corner.primary};
    font-size: 1.4rem;
    font-weight: 400;
    padding: 0.8rem 1rem;
  }

  & .fileInput {
    width: 100%;
    height: 100px;
  }
`
