import React, { useEffect, useState } from 'react'
import {
  CardRow,
  CardSubTitle,
  NotifyCheckbox,
  UploadFormContainer,
} from './styles'
import { RequestStatus } from '../../types/globalTypes'
import { MainButton } from '../../styles/buttons'
import { useLazyQuery, useMutation, useReactiveVar } from '@apollo/client'
import {
  updateRequestStatusMutation,
  updateRequestStatusMutationVariables,
} from '../../types/updateRequestStatusMutation'
import {
  CONTRACT_CREATE_MUTATION,
  REQUEST_INFO_CONTRACT_QUERY,
  REQUEST_UPDATE_STATUS_MUTATION,
} from './gql'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons/faSpinner'
import { authTokenVar, fileLinkVar } from '../../apollo'
import { requestInfo_request_info_record_contracts_record } from '../../types/requestInfo'
import { useForm } from 'react-hook-form'
import { faFileUpload } from '@fortawesome/free-solid-svg-icons'
import {
  createFileMutation,
  createFileMutationVariables,
} from '../../types/createFileMutation'
import { CREATE_FILE_MUTATION } from '../../common/gql/mutation'
import {
  createContractMutation,
  createContractMutationVariables,
} from '../../types/createContractMutation'
import {
  requestContractInfo,
  requestContractInfoVariables,
} from '../../types/requestContractInfo'
import { EMAIL_SEND_QUERY } from '../../common/gql/query'
import {
  emailSendQuery,
  emailSendQueryVariables,
} from '../../types/emailSendQuery'
import { CHANGE_STATUS_EMAIL_MESSAGE } from '../../common/constant'

interface Props {
  contractorId: number
  requestId: number
  currentStatus: RequestStatus
  fetchingStatus: RequestStatus
  contracts:
    | requestInfo_request_info_record_contracts_record[]
    | null
    | undefined
  onStatusChangeClick: (status: RequestStatus) => void
  email: string | null | undefined
}

interface FileForm {
  file: FileList
  number: string
}

const RequestModalStatusBlock: React.FC<Props> = ({
  currentStatus,
  fetchingStatus,
  onStatusChangeClick,
  requestId,
  contracts,
  contractorId,
  email,
}) => {
  const [uploadError, setUploadError] = useState('')
  const [contractNumber, setContactNumber] = useState('')
  const [notify, setNotify] = useState(true)
  const fileLink = useReactiveVar(fileLinkVar)
  const token = useReactiveVar(authTokenVar)

  const [executeEmailSend, { data: emailSendData, error: emailSendError }] =
    useLazyQuery<emailSendQuery, emailSendQueryVariables>(EMAIL_SEND_QUERY, {
      fetchPolicy: 'network-only',
    })

  const onUpdateStatusCompleted = (data: updateRequestStatusMutation) => {
    if (data.request.updateStatus.ok && notify && email) {
      executeEmailSend({
        variables: {
          input: {
            address: email,
            message: CHANGE_STATUS_EMAIL_MESSAGE,
          },
        },
      })
    }
  }

  const [statusMutation, { data, error, loading }] = useMutation<
    updateRequestStatusMutation,
    updateRequestStatusMutationVariables
  >(REQUEST_UPDATE_STATUS_MUTATION, { onCompleted: onUpdateStatusCompleted })

  const onStatusChangeClickApproveClick = () => {
    if (currentStatus) {
      statusMutation({
        variables: {
          input: {
            requestID: requestId,
            newStatus: currentStatus,
          },
        },
      })
    }
  }

  const {
    register,
    getValues,
    handleSubmit,
    formState: { isValid },
  } = useForm<FileForm>({
    mode: 'all',
  })

  const [
    createFileMutation,
    {
      data: createFileData,
      error: createFileError,
      loading: createFileLoading,
    },
  ] = useMutation<createFileMutation, createFileMutationVariables>(
    CREATE_FILE_MUTATION,
  )

  const [createContractMutation, { data: createContractData }] = useMutation<
    createContractMutation,
    createContractMutationVariables
  >(CONTRACT_CREATE_MUTATION)

  useEffect(() => {
    if (createFileData && createFileData.file.create.ok && contractNumber) {
      createContractMutation({
        variables: {
          input: {
            contractNumber: contractNumber,
            fileId: createFileData.file.create.record?.id,
            requestId: requestId,
            contractorId: contractorId,
          },
        },
      })
    }
  }, [
    createFileData,
    contractNumber,
    contractorId,
    createContractMutation,
    requestId,
  ])

  const [executeRequestContractQuery] = useLazyQuery<
    requestContractInfo,
    requestContractInfoVariables
  >(REQUEST_INFO_CONTRACT_QUERY, { fetchPolicy: 'network-only' })

  useEffect(() => {
    if (createContractData && createContractData.contract.create.ok) {
      executeRequestContractQuery({
        variables: {
          input: { requestID: requestId },
        },
      })
    }
  }, [createContractData, executeRequestContractQuery, requestId])

  const onFileSubmit = async () => {
    if (isValid && !createFileLoading) {
      const { file, number } = getValues()
      if (!number && contracts && contracts[0].number) {
        setContactNumber(contracts[0].number)
      } else {
        setContactNumber(number)
      }

      const actualFile = file[0]
      const formBody = new FormData()
      formBody.append('file', actualFile)

      const res = await fetch(process.env.REACT_APP_UPLOAD_LINK!, {
        headers: {
          'X-JWT': token!,
        },
        method: 'POST',
        body: formBody,
      })

      if (res.ok) {
        const { hash } = await res.json()
        await createFileMutation({
          variables: {
            input: {
              fileName: actualFile.name,
              mimeType: actualFile.type,
              size: actualFile.size,
              extension: 'pdf',
              checksum: hash,
            },
          },
        })
      } else {
        setUploadError(res.statusText)
      }
    }
  }

  return (
    <React.Fragment>
      <CardSubTitle>
        Статус заявления:&nbsp;
        {loading && <FontAwesomeIcon icon={faSpinner} />}
        {data && data.request.updateStatus.ok ? (
          <span>статус обновлен</span>
        ) : (
          <span>{data && data.request.updateStatus.error![0].message}</span>
        )}
        {error && <span>{error.message}</span>}
        {emailSendData && emailSendData.email.send.ok ? (
          <span>email отправлен</span>
        ) : (
          <span>
            {emailSendData && emailSendData.email.send.error![0].message}
          </span>
        )}
        {emailSendError && <span>{emailSendError.message}</span>}
        <NotifyCheckbox notify={notify} onClick={() => setNotify(!notify)}>
          уведомлять клиента
        </NotifyCheckbox>
      </CardSubTitle>
      <CardRow>
        <span
          onClick={() => onStatusChangeClick(RequestStatus.pending)}
          className={`status ${
            currentStatus === RequestStatus.pending ? 'active' : ''
          }`}
        >
          Ожидает рассмотрения
        </span>
        <span
          onClick={() => onStatusChangeClick(RequestStatus.accepted)}
          className={`status ${
            currentStatus === RequestStatus.accepted ? 'active' : ''
          }`}
        >
          Принято в работу
        </span>
        <span
          onClick={() => onStatusChangeClick(RequestStatus.signed)}
          className={`status ${
            currentStatus === RequestStatus.signed ? 'active' : ''
          }`}
        >
          На подписании
        </span>
        <span
          onClick={() => onStatusChangeClick(RequestStatus.completed)}
          className={`status ${
            currentStatus === RequestStatus.completed ? 'active' : ''
          }`}
        >
          Исполнено
        </span>
        <span
          onClick={() => onStatusChangeClick(RequestStatus.rejected)}
          className={`status ${
            currentStatus === RequestStatus.rejected ? 'active' : ''
          }`}
        >
          Отклонено
        </span>
        <MainButton
          disabled={currentStatus === fetchingStatus}
          onClick={onStatusChangeClickApproveClick}
        >
          Изменить
        </MainButton>
      </CardRow>
      {currentStatus === RequestStatus.signed && (
        <>
          <CardSubTitle>
            Загрузить договор{' '}
            {contracts &&
              contracts[0] &&
              `(загруженный ранее: № ${contracts[0].number})`}
            {contracts && contracts[0] && (
              <a
                href={`${fileLink}${contracts[0].fileStorageItemID}`}
                target='_blanc'
                rel='nofollow noopener'
              >
                Скачать
              </a>
            )}
            {uploadError && (
              <span>&nbsp;Ошибка загрузки, обновите страницу </span>
            )}
          </CardSubTitle>
          <UploadFormContainer>
            <form onSubmit={handleSubmit(onFileSubmit)}>
              {createFileData && createFileData.file.create.ok && (
                <span className='uploadResult'>Файл загружен</span>
              )}
              {createFileData && createFileData.file.create.error && (
                <span className='uploadResult'>
                  Ошибка загрузки {createFileData.file.create.error[0].message}
                </span>
              )}
              {createFileError && (
                <span className='uploadResult'>{createFileError.message}</span>
              )}
              <FontAwesomeIcon
                icon={faFileUpload}
                size='3x'
                color='lightblue'
              />
              <input
                id='fileInput'
                className='fileInput'
                type='file'
                accept='application/pdf'
                {...register('file', { required: 'Прикрепите файл пдф' })}
              />
              <input
                type='text'
                className='docNumber'
                placeholder='Номер договора'
                {...register('number', { required: 'Укажите номер договора' })}
              />
              <label htmlFor='fileInput'>Выберите файл</label>
              <MainButton
                className='inputButton'
                disabled={!isValid || createFileLoading}
              >
                Отправить
              </MainButton>
            </form>
          </UploadFormContainer>
        </>
      )}
    </React.Fragment>
  )
}

export default RequestModalStatusBlock
