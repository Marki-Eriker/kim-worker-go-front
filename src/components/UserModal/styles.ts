import styled from '@emotion/styled/macro'

export const ModalBackground = styled.div`
  position: absolute;
  top: -65px;
  right: 0;
  height: 100vh;
  width: 100vw;
  background-color: ${(p) => p.theme.mainBackground};
  opacity: 0.5;
`

interface IUserModalContainer {
  load?: boolean
}

export const UserModalContainer = styled.div<IUserModalContainer>`
  display: flex;
  flex-direction: column;
  justify-content: ${(p) => (p.load ? 'center' : 'flex-start')};
  align-items: ${(p) => (p.load ? 'center' : 'stretch')};
  min-height: 400px;
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translateX(-50%);
  width: 500px;
  background-color: ${(p) => p.theme.colors.primary.white};
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  box-shadow: ${(p) => p.theme.shadow.primary};
  opacity: 1;

  & .close {
    position: absolute;
    right: 10px;
    top: 10px;
    font-size: 35px;
    cursor: pointer;
    color: ${(p) => p.theme.mainBackground};
    opacity: 0.6;
    transition: opacity 0.2s linear;
    &:hover {
      opacity: 0.9;
    }
  }

  & .loading {
    align-self: center;
  }

  & .content {
    position: relative;
    padding: 20px;
    display: flex;
    flex-direction: column;

    & h2 {
      align-self: center;
    }

    & button {
      margin-top: 10px;
    }

    & .info {
      align-self: center;
      margin-top: 5px;
      font-size: 12px;
    }

    & .requestTypes {
      margin-top: 20px;

      & div {
        cursor: pointer;
        border: 2px solid ${(p) => p.theme.secondaryBackground};
        border-radius: 8px;
        padding: 8px 10px;
        transition: border-color 0.2s linear;
        font-size: 12px;
        margin-bottom: 5px;

        &:hover {
          border-color: ${(p) => p.theme.colors.secondary.gray700};
        }
      }

      & .active {
        background-color: ${(p) => p.theme.secondaryBackground};
        position: relative;

        &:before {
          position: absolute;
          right: 5px;
          content: '\\2713';
          height: 10px;
          width: 10px;
          color: green;
        }
      }
    }
  }
`

export const UserInfoForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  & .group {
    display: flex;
    align-items: center;
    margin-bottom: 10px;

    & label {
      min-width: 170px;
      font-size: 1.4rem;
    }
  }
`

export const FormInput = styled.input`
  width: 100%;
  padding: 5px 10px;
`

export const FormSelect = styled.select`
  width: 100%;
  padding: 5px 7px;
`
