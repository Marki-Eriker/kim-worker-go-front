import React, { useEffect, useState } from 'react'
import { CardRow, CardSubTitle, UploadFormContainer } from './styles'
import { contractFindQuery_contract_find_record_paymentInvoice_record } from '../../types/contractFindQuery'
import { useLazyQuery, useMutation, useReactiveVar } from '@apollo/client'
import { authTokenVar, fileLinkVar } from '../../apollo'
import { MainButton } from '../../styles/buttons'
import {
  APPROVE_CONFIRMATION_MUTATION,
  CONTRACT_INVOICE_FIND_QUERY,
  INVOICE_CREATE_MUTATION,
} from './gql'
import {
  appriveConfirmationMutation,
  appriveConfirmationMutationVariables,
} from '../../types/appriveConfirmationMutation'
import { useForm } from 'react-hook-form'
import { faFileUpload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  invoiceCreateMutation,
  invoiceCreateMutationVariables,
} from '../../types/invoiceCreateMutation'
import {
  createFileMutation,
  createFileMutationVariables,
} from '../../types/createFileMutation'
import { CREATE_FILE_MUTATION } from '../../common/gql/mutation'
import {
  contractInvoiceFindQuery,
  contractInvoiceFindQueryVariables,
} from '../../types/contractInvoiceFindQuery'

interface Props {
  invoice:
    | contractFindQuery_contract_find_record_paymentInvoice_record[]
    | undefined
  contractId: number
}

const ContractModalInvoiceBlock: React.FC<Props> = ({
  invoice,
  contractId,
}) => {
  const fileLink = useReactiveVar(fileLinkVar)
  const token = useReactiveVar(authTokenVar)

  const [uploadError, setUploadError] = useState('')

  const [approveConfirmationMutation, { loading }] = useMutation<
    appriveConfirmationMutation,
    appriveConfirmationMutationVariables
  >(APPROVE_CONFIRMATION_MUTATION)

  const onApproveClick = (id: number) => {
    approveConfirmationMutation({
      variables: { input: { confirmationID: id } },
    })
  }

  const {
    register,
    getValues,
    handleSubmit,
    reset: resetForm,
    formState: { isValid },
  } = useForm<{ file: FileList }>({
    mode: 'all',
  })

  const [executeContractInvoiceFindQuery] = useLazyQuery<
    contractInvoiceFindQuery,
    contractInvoiceFindQueryVariables
  >(CONTRACT_INVOICE_FIND_QUERY, { fetchPolicy: 'network-only' })

  const onInvoiceCreateCompleted = (data: invoiceCreateMutation) => {
    if (data.payment.createInvoice.ok) {
      executeContractInvoiceFindQuery({
        variables: { input: { contractID: contractId } },
      })
    }
  }

  const [
    invoiceCreateMutation,
    { data: invoiceCreateData, error: invoiceCreateError },
  ] = useMutation<invoiceCreateMutation, invoiceCreateMutationVariables>(
    INVOICE_CREATE_MUTATION,
    { onCompleted: onInvoiceCreateCompleted },
  )

  const [
    createFileMutation,
    { data: createFileData, loading: createFileLoading },
  ] = useMutation<createFileMutation, createFileMutationVariables>(
    CREATE_FILE_MUTATION,
  )

  useEffect(() => {
    if (createFileData && createFileData.file.create.ok) {
      invoiceCreateMutation({
        variables: {
          input: {
            contractID: contractId,
            fileID: createFileData.file.create.record?.id,
          },
        },
      })
    }
  }, [createFileData, contractId, invoiceCreateMutation])

  const onFileSubmit = async () => {
    if (isValid && !createFileLoading) {
      setUploadError('')
      const { file } = getValues()
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
        resetForm()
      } else {
        setUploadError(res.statusText)
      }
    }
  }

  return (
    <React.Fragment>
      <CardSubTitle>Счета</CardSubTitle>
      {invoice &&
        invoice.map((i) => {
          const invoiceDate = new Date(i.createdAt).toLocaleDateString()
          const invoiceLink = `${fileLink}${i.fileID}`
          const confirmInvoiceLink =
            i.confirmation?.ok && i.confirmation.record
              ? `${fileLink}${i.confirmation.record.fileID}`
              : ''
          return (
            <CardRow key={i.id}>
              <a href={invoiceLink} target='_blanc' rel='nofollow noopener'>
                Выставленный
              </a>
              <span className='date'>{invoiceDate}</span>
              {confirmInvoiceLink ? (
                <React.Fragment>
                  <a
                    href={confirmInvoiceLink}
                    target='_blanc'
                    rel='nofollow noopener'
                  >
                    Подтверждение оплаты
                  </a>
                  {i.confirmation?.record?.proven ? (
                    <span className='confirmation ok'>проверено</span>
                  ) : (
                    <React.Fragment>
                      <span className='confirmation false'>не проверено</span>
                      <MainButton
                        disabled={loading}
                        onClick={() =>
                          onApproveClick(i.confirmation?.record?.id)
                        }
                      >
                        подтвердить оплату
                      </MainButton>
                    </React.Fragment>
                  )}
                </React.Fragment>
              ) : (
                'Подтверждение оплаты: отсутствует'
              )}
            </CardRow>
          )
        })}
      {!invoice && <CardRow>Счета не выставлялись</CardRow>}
      <UploadFormContainer>
        <form onSubmit={handleSubmit(onFileSubmit)}>
          {invoiceCreateData && invoiceCreateData.payment.createInvoice.ok && (
            <span className='uploadResult'>Файл загружен</span>
          )}
          {invoiceCreateData && !invoiceCreateData.payment.createInvoice.ok && (
            <span className='uploadResult'>
              Ошибка загрузки{' '}
              {invoiceCreateData.payment.createInvoice.error![0].message}
            </span>
          )}
          {invoiceCreateError && (
            <span className='uploadResult'>Ошибка загрузки</span>
          )}
          {uploadError && (
            <span>&nbsp;Ошибка загрузки, обновите страницу </span>
          )}
          <FontAwesomeIcon icon={faFileUpload} size='3x' color='lightblue' />
          <input
            id='fileInput'
            className='fileInput'
            type='file'
            accept='application/pdf'
            {...register('file', { required: 'Прикрепите файл пдф' })}
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
    </React.Fragment>
  )
}

export default ContractModalInvoiceBlock
