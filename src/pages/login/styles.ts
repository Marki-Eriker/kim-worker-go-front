import styled from '@emotion/styled'

export const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(p) => p.theme.mainBackground};
  height: 100vh;
`

export const LoginForm = styled.form`
  width: 320px;
  display: flex;
  flex-direction: column;
  border-radius: ${(p) => p.theme.corner.primary};
  background-color: ${(p) => p.theme.colors.primary.white};
  box-shadow: ${(p) => p.theme.shadow.primary};
  padding: 20px;

  & h1 {
    margin-bottom: 20px;
    text-align: center;
  }

  & input {
    margin-bottom: 10px;
  }
`

interface FormInputProps {
  withIcon?: boolean
}

export const FormInput = styled.input<FormInputProps>`
  outline: none;
  border: 1px solid ${(p) => p.theme.colors.secondary.gray700};
  border-radius: ${(p) => p.theme.corner.primary};
  font-size: 1.4rem;
  font-weight: 400;
  padding: ${(p) => (p.withIcon ? '0.8rem 3rem 0.8rem 1rem' : '0.8rem 1rem')};

  &::placeholder {
    color: ${(p) => p.theme.colors.secondary.gray800};
  }
`

export const ServerError = styled.div`
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  padding: 1rem 2rem;
  font-weight: 600;
  max-width: 500px;
  color: ${(p) => p.theme.colors.primary.red};
  border-radius: ${(p) => p.theme.corner.primary};
  box-shadow: ${(p) => p.theme.shadow.primary};
  background-color: ${(p) => p.theme.colors.secondary.redLight};
`
