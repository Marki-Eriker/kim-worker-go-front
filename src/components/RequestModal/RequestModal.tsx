import React, { useEffect, useState } from 'react'
import { useLazyQuery } from '@apollo/client'
import { REQUEST_INFO_QUERY } from './gql'
import { RequestStatus } from '../../types/globalTypes'
import { RequestStatusModalContainer } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner, faTimes } from '@fortawesome/free-solid-svg-icons'
import RequestModalStatusBlock from './RequestModalStatusBlock'
import RequestModalMainBlock from './RequestModalMainBlock'
import RequestModalContactBlock from './RequestModalContactBlock'
import RequestModalBankBlock from './RequestModalBankBlock'
import RequestModalContractBlock from './RequestModalContractBlock'
import {
  requestInfo,
  requestInfo_request_info_record,
  requestInfoVariables,
} from '../../types/requestInfo'
import RequestModalShipBlock from './RequestModalShipBlock'

interface Props {
  setStatusModal: React.Dispatch<
    React.SetStateAction<{ isOpen: boolean; requestId: number }>
  >
  variants: { id: number; name: string }[]
  id: number
}

const RequestModal: React.FC<Props> = ({ setStatusModal, id }) => {
  const [executeInfoQuery, { loading, data: requestData }] = useLazyQuery<
    requestInfo,
    requestInfoVariables
  >(REQUEST_INFO_QUERY, {
    variables: {
      input: { requestID: id },
    },
  })

  const [currentStatus, setCurrentStatus] = useState<RequestStatus>()
  const [request, setRequest] =
    useState<requestInfo_request_info_record | null>()

  useEffect(() => {
    executeInfoQuery()
  }, [executeInfoQuery])

  useEffect(() => {
    if (requestData?.request.info.ok) {
      setCurrentStatus(requestData?.request.info.record?.status)
      setRequest(requestData.request.info.record)
    }
  }, [requestData])

  const onStatusChangeClick = (s: RequestStatus) => {
    if (currentStatus !== s) {
      setCurrentStatus(s)
    }
  }

  if (loading) {
    return (
      <RequestStatusModalContainer load={true}>
        <FontAwesomeIcon
          className='close'
          icon={faTimes}
          size='2x'
          onClick={() => setStatusModal({ isOpen: false, requestId: 0 })}
        />

        <FontAwesomeIcon
          className='loading'
          icon={faSpinner}
          size='6x'
          pulse
          color='lightblue'
        />
      </RequestStatusModalContainer>
    )
  }

  return (
    <RequestStatusModalContainer>
      <FontAwesomeIcon
        className='close'
        icon={faTimes}
        size='2x'
        onClick={() => setStatusModal({ isOpen: false, requestId: 0 })}
      />
      <h2>Заявление на заключение договора</h2>
      <RequestModalStatusBlock
        contractorId={request?.contractor?.record?.id}
        requestId={id}
        currentStatus={currentStatus!}
        fetchingStatus={request?.status!}
        onStatusChangeClick={onStatusChangeClick}
        contracts={request?.contracts?.record}
        email={
          request?.organizationContact?.ok
            ? request.organizationContact.record?.email
            : request?.contractor?.record?.person?.record?.email
        }
      />
      <RequestModalMainBlock
        mediumType={request?.contractMediumType}
        name={request?.contractor?.record?.fillName}
      />
      <RequestModalContactBlock
        data={
          request?.organizationContact?.ok
            ? request.organizationContact.record
            : request?.contractor?.record?.person?.record
        }
      />
      <RequestModalBankBlock data={request?.bankAccount?.record} />
      <RequestModalContractBlock data={request?.signatory?.record} />
      <RequestModalShipBlock ships={request?.ships?.record} />
    </RequestStatusModalContainer>
  )
}

export default RequestModal
