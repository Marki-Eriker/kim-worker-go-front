import React, { useEffect, useState } from 'react'
import { BaseRole } from '../../types/globalTypes'
import { useMutation, useQuery } from '@apollo/client'
import {
  userFindQuery,
  userFindQuery_user_find_record,
  userFindQueryVariables,
} from '../../types/userFindQuery'
import {
  UPDATE_USER_MAIN_MUTATION,
  USER_GRANT_REQUEST_ACCESS_MUTATION,
  USER_QUERY,
} from './gql'
import {
  FormInput,
  FormSelect,
  ModalBackground,
  UserInfoForm,
  UserModalContainer,
} from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner, faTimes } from '@fortawesome/free-solid-svg-icons'
import { useForm } from 'react-hook-form'
import { MainButton } from '../../styles/buttons'
import {
  updateUserMainMutation,
  updateUserMainMutationVariables,
} from '../../types/updateUserMainMutation'
import { typeVariants } from '../../common/helpers/typeVariants'
import {
  userGrantRequestAccessMutation,
  userGrantRequestAccessMutationVariables,
} from '../../types/userGrantRequestAccessMutation'

interface Props {
  userId: number
  close: () => void
}

interface UserForm {
  email: string
  fullName: string
  baseRole: BaseRole
}

interface UserState extends userFindQuery_user_find_record {}

const UserModal: React.FC<Props> = ({ userId, close }) => {
  const [user, setUser] = useState<UserState>()
  const [serviceTypes, setServiceTypes] = useState<number[]>([])

  const {
    register,
    getValues,
    handleSubmit,
    formState: { isDirty },
  } = useForm<UserForm>()

  const { data: userData, loading: userLoading } = useQuery<
    userFindQuery,
    userFindQueryVariables
  >(USER_QUERY, {
    variables: {
      input: { userID: userId },
    },
  })

  useEffect(() => {
    if (!userLoading && userData && userData.user.find.ok) {
      setServiceTypes(userData.user.find.record?.serviceTypes!)
      setUser(userData.user.find.record!)
    }
  }, [userData, userLoading])

  const [
    editUserMutation,
    { data: editUserData, loading: editUserLoading, error: editUserError },
  ] = useMutation<updateUserMainMutation, updateUserMainMutationVariables>(
    UPDATE_USER_MAIN_MUTATION,
  )

  const onEditSubmit = () => {
    if (!editUserLoading && isDirty && user) {
      const values = getValues()
      editUserMutation({
        variables: {
          input: { userID: user.id, ...values },
        },
      })
    }
  }

  const variants = typeVariants.filter((t) => t.id !== 0)

  const onServiceTypeSubmit = () => {
    if (user) {
      grantRequestAccessMutation({
        variables: {
          input: {
            userID: user.id,
            serviceTypes: serviceTypes,
          },
        },
      })
    }
  }

  const isDisabled = (): boolean => {
    return !!(
      user &&
      serviceTypes.slice().sort().join('|') ===
        user.serviceTypes?.slice().sort().join('|')
    )
  }

  const onServiceTypeClick = (id: number) => {
    if (serviceTypes.includes(id)) {
      setServiceTypes(serviceTypes.filter((t) => t !== id))
    } else {
      const newTypes = [...serviceTypes, id]
      setServiceTypes(newTypes)
    }
  }

  const [grantRequestAccessMutation] = useMutation<
    userGrantRequestAccessMutation,
    userGrantRequestAccessMutationVariables
  >(USER_GRANT_REQUEST_ACCESS_MUTATION)

  if (userLoading || !user) {
    return (
      <UserModalContainer load>
        <FontAwesomeIcon
          className='close'
          icon={faTimes}
          size='2x'
          onClick={close}
        />

        <FontAwesomeIcon
          className='loading'
          icon={faSpinner}
          size='6x'
          pulse
          color='lightblue'
        />
      </UserModalContainer>
    )
  }

  return (
    <React.Fragment>
      <ModalBackground onClick={close} />
      <UserModalContainer>
        <div className='content'>
          <h2>Информация о пользователе</h2>
          {editUserData && editUserData.user.updateMain.ok && (
            <span className='info'>Основная информация изменена</span>
          )}
          {/*{accessData?.grantRequestAccess.ok && (*/}
          {/*  <span className='info'>Доступы к заявкам обновлены</span>*/}
          {/*)}*/}
          {editUserData && !editUserData.user.updateMain.ok && (
            <span className='info'>
              {editUserData.user.updateMain.error![0].message}
            </span>
          )}
          {editUserError && (
            <span className='info'>{editUserError.message}</span>
          )}
          {/*{accessError && <span className='info'>{accessError.message}</span>}*/}
          <span className='close' onClick={close}>
            &times;
          </span>
          <UserInfoForm onSubmit={handleSubmit(onEditSubmit)}>
            <div className='group'>
              <label htmlFor='email'>Электронная почта:</label>
              <FormInput
                type='email'
                defaultValue={user!.email}
                {...register('email', {
                  pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  required: 'Введите email',
                })}
              />
            </div>
            <div className='group'>
              <label htmlFor='fullName'>ФИО:</label>
              <FormInput
                type='text'
                defaultValue={user!.fullName}
                {...register('fullName')}
              />
            </div>
            <div className='group'>
              <label htmlFor='baseRole'>Базовая роль:</label>
              <FormSelect
                {...register('baseRole')}
                defaultValue={user!.baseRole}
              >
                <option value={BaseRole.ADMIN}>Администратор</option>
                <option value={BaseRole.HEAD}>Руководитель</option>
                <option value={BaseRole.WORKER}>Сотрудник</option>
              </FormSelect>
            </div>
            <MainButton disabled={!isDirty}>
              Сохранить изменения основной информации
            </MainButton>
          </UserInfoForm>
          <div className='requestTypes'>
            {variants.map((t) => (
              <div
                key={t.id}
                className={serviceTypes.includes(t.id) ? 'active' : ''}
                onClick={() => onServiceTypeClick(t.id)}
              >
                {t.name}
              </div>
            ))}
          </div>
          <MainButton disabled={isDisabled()} onClick={onServiceTypeSubmit}>
            Сохранить изменения доступа к заявкам
          </MainButton>
        </div>
      </UserModalContainer>
    </React.Fragment>
  )
}

export default UserModal
