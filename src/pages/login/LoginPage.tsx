import React, { useEffect } from 'react'
import { useMutation } from '@apollo/client'
import { LOGIN_MUTATION } from './qgl'
import {
  loginMutation,
  loginMutationVariables,
} from '../../types/loginMutation'
import { LOCALSTORAGE_TOKEN } from '../../common/constant'
import { authTokenVar, isLoggedInVar } from '../../apollo'
import { useRefresh } from '../../common/hooks'
import { FormInput, LoginContainer, LoginForm, ServerError } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { useForm } from 'react-hook-form'
import { MainButton } from '../../styles/buttons'

interface ILoginForm {
  email: string
  password: string
}

const LoginPage = () => {
  const { data: refreshData, loading: refreshLoading } = useRefresh()

  useEffect(() => {
    if (refreshData?.user.refresh.ok) {
      localStorage.setItem(
        LOCALSTORAGE_TOKEN,
        refreshData.user.refresh.accessToken!,
      )
      isLoggedInVar(true)
    }
  }, [refreshData, refreshLoading])

  const onCompleted = (data: loginMutation) => {
    const {
      user: { login },
    } = data

    if (login.ok) {
      localStorage.setItem(LOCALSTORAGE_TOKEN, login.accessToken!)
      authTokenVar(login.accessToken)
      isLoggedInVar(true)
    }
  }

  const [loginMutation, { data, loading, error }] = useMutation<
    loginMutation,
    loginMutationVariables
  >(LOGIN_MUTATION, { onCompleted })

  const onSubmit = () => {
    if (!loading) {
      const { email, password } = getValues()
      loginMutation({
        variables: {
          input: { email, password },
        },
      })
    }
  }

  const {
    register,
    getValues,
    handleSubmit,
    formState: { isValid, isDirty },
  } = useForm<ILoginForm>({
    mode: 'onChange',
  })

  if (refreshLoading) {
    return (
      <LoginContainer>
        <FontAwesomeIcon icon={faSpinner} size='6x' pulse color='white' />
      </LoginContainer>
    )
  }

  const loginError =
    !data?.user.login.ok && data?.user.login.error
      ? data.user.login.error[0].message
      : null

  return (
    <LoginContainer>
      {loginError && <ServerError>{loginError}</ServerError>}
      {error && <ServerError>{error.message}</ServerError>}
      <LoginForm onSubmit={handleSubmit(onSubmit)}>
        <h1>Войдите в систему</h1>
        <FormInput
          placeholder={'Имя пользователя'}
          type='email'
          {...register('email', {
            pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
            required: 'Введите email',
          })}
        />
        <FormInput
          placeholder={'Пароль'}
          type='password'
          {...register('password', { required: 'Введите пароль' })}
        />
        <MainButton
          disabled={loading || !isValid || !isDirty}
          loading={loading}
          type='submit'
        >
          Войти
        </MainButton>
      </LoginForm>
    </LoginContainer>
  )
}

export default LoginPage
