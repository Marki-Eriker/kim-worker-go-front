import React, { useEffect, useState } from 'react'
import { useLazyQuery, useReactiveVar } from '@apollo/client'
import { fileLinkVar } from '../../apollo'
import { useMe } from '../../common/hooks'
import { typeVariants } from '../../common/helpers/typeVariants'
import {
  OrderBy,
  RequestListInput,
  RequestStatus,
} from '../../types/globalTypes'
import {
  getRequestListQuery,
  getRequestListQueryVariables,
} from '../../types/getRequestListQuery'
import { REQUEST_LIST_QUERY } from './gql'
import {
  CardRow,
  CardSubTitle,
  CardTitle,
  RequestContainer,
  TableItem,
} from './styles'
import {
  PaginationSize,
  Paginator,
  RequestModal,
  SelectFilter,
} from '../../components'
import {
  getHumanityStatus,
  statusVariants,
} from '../../common/helpers/statusVariants'
import { LoadingRowContainer } from '../../styles/containers'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt, faSpinner } from '@fortawesome/free-solid-svg-icons'

const RequestPage = () => {
  const fileLink = useReactiveVar(fileLinkVar)
  const { data: meData } = useMe()

  const allowedTypeVariants = typeVariants.filter(
    (t) => t.id === 0 || meData?.user.me.record?.serviceTypes.includes(t.id),
  )

  const [pagination, setPagination] = useState({
    page: 1,
    pageSize: 10,
    orderField: 'created_at',
    orderBy: OrderBy.DESC,
  })

  const [requestModal, setRequestModal] = useState({
    isOpen: false,
    requestId: 0,
  })

  const [currentRequestType, setCurrentRequestType] = useState<number>(0)
  const [currentStatusType, setCurrentStatusType] = useState<number>(0)

  const [executeGetList, { loading, data: requestList }] = useLazyQuery<
    getRequestListQuery,
    getRequestListQueryVariables
  >(REQUEST_LIST_QUERY)

  useEffect(() => {
    let status
    if (currentStatusType > 0) {
      switch (currentStatusType) {
        case 1:
          status = RequestStatus.pending
          break
        case 2:
          status = RequestStatus.rejected
          break
        case 3:
          status = RequestStatus.accepted
          break
        case 4:
          status = RequestStatus.completed
          break
        case 5:
          status = RequestStatus.signed
          break
      }
    }

    let input: RequestListInput
    input = { filter: { ...pagination } }
    input = currentRequestType
      ? { serviceID: currentRequestType, ...input }
      : { ...input }
    input = currentStatusType ? { status, ...input } : { ...input }

    executeGetList({
      variables: { input },
    })
  }, [currentRequestType, currentStatusType, executeGetList, pagination])

  const requests =
    requestList &&
    requestList.request.list.ok &&
    requestList.request.list.record

  const setPage = (page: number) => {
    setPagination({ ...pagination, page })
  }

  const onEditStatusClick = (id: number) => {
    setRequestModal({ isOpen: true, requestId: id })
  }

  return (
    <RequestContainer>
      <CardTitle>
        <SelectFilter
          variants={allowedTypeVariants}
          setFilterValue={setCurrentRequestType}
        />
        <SelectFilter
          variants={statusVariants}
          setFilterValue={setCurrentStatusType}
        />
        {!loading && requestList && (
          <Paginator
            paginationInfo={requestList.request.list.pagination!}
            setPage={setPage}
          />
        )}
        <PaginationSize pagination={pagination} setPagination={setPagination} />
      </CardTitle>
      <CardSubTitle>
        <TableItem alignCenter>ID</TableItem>
        <TableItem>Статус</TableItem>
        <TableItem>Заявитель</TableItem>
      </CardSubTitle>
      {loading && (
        <LoadingRowContainer>
          <FontAwesomeIcon icon={faSpinner} size='6x' pulse color='lightblue' />
        </LoadingRowContainer>
      )}
      {!loading &&
        requests &&
        requests.map((r) => {
          const d = new Date(r.createdAt).toLocaleDateString()
          return (
            <CardRow key={r.id}>
              <TableItem alignCenter>{r.id}</TableItem>
              <TableItem>{getHumanityStatus(r.status)}</TableItem>
              <TableItem>{r.contractor?.record?.shortName}</TableItem>
              <TableItem>{d}</TableItem>
              {r.contractFilledTemplateID ? (
                <TableItem>
                  <a
                    href={`${fileLink}${r.contractFilledTemplateID}`}
                    target='_blanc'
                    rel='nofollow noopener'
                  >
                    Договор
                  </a>
                </TableItem>
              ) : (
                <TableItem />
              )}
              <TableItem>
                <FontAwesomeIcon
                  icon={faPencilAlt}
                  size='2x'
                  onClick={() => onEditStatusClick(r.id)}
                />
              </TableItem>
            </CardRow>
          )
        })}
      {requestModal.isOpen && (
        <RequestModal
          setStatusModal={setRequestModal}
          variants={statusVariants}
          id={requestModal.requestId}
        />
      )}
    </RequestContainer>
  )
}

export default RequestPage
