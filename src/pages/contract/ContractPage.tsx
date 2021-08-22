import React, { useEffect, useState } from 'react'
import {
  CardRow,
  CardSubTitle,
  CardTitle,
  ContractContainer,
  TableItem,
} from './styles'
import { ContractModal, Paginator, SelectFilter } from '../../components'
import { useLazyQuery, useReactiveVar } from '@apollo/client'
import { fileLinkVar } from '../../apollo'
import { ContractListInput, OrderBy } from '../../types/globalTypes'
import { useMe } from '../../common/hooks'
import { typeVariants } from '../../common/typeVariants'
import {
  contractListQuery,
  contractListQueryVariables,
} from '../../types/contractListQuery'
import { CONTRACT_LIST_QUERY } from './gql'
import { LoadingRowContainer } from '../../styles/containers'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt, faSpinner } from '@fortawesome/free-solid-svg-icons'

const ContractPage = () => {
  const { data: meData } = useMe()
  const fileLink = useReactiveVar(fileLinkVar)
  const [currentRequestType, setCurrentRequestType] = useState<number>(0)
  const [contractModal, setContractModal] = useState({
    isOpen: false,
    contractId: 0,
  })
  const [pagination, setPagination] = useState({
    page: 1,
    pageSize: 10,
    orderField: 'created_at',
    orderBy: OrderBy.DESC,
  })

  const onEditContractClick = (id: number) => {
    setContractModal({ isOpen: true, contractId: id })
  }

  const setPage = (page: number) => {
    setPagination({ ...pagination, page })
  }

  const allowedTypeVariants = typeVariants.filter(
    (t) => t.id === 0 || meData?.user.me.record?.serviceTypes.includes(t.id),
  )

  const [
    executeContractListQuery,
    { data: contractListData, loading: contractListLoading },
  ] = useLazyQuery<contractListQuery, contractListQueryVariables>(
    CONTRACT_LIST_QUERY,
  )

  useEffect(() => {
    let input: ContractListInput
    input = { filter: { ...pagination } }
    input = currentRequestType
      ? { serviceTypeID: currentRequestType, ...input }
      : { ...input }

    executeContractListQuery({
      variables: { input },
    })
  }, [currentRequestType, pagination, executeContractListQuery])

  return (
    <ContractContainer>
      <CardTitle>
        <SelectFilter
          variants={allowedTypeVariants}
          setFilterValue={setCurrentRequestType}
        />
        {!contractListLoading &&
          contractListData &&
          contractListData.contract.list.ok && (
            <Paginator
              paginationInfo={contractListData.contract.list.pagination!}
              setPage={setPage}
            />
          )}
        <div className='paginationSize'>
          по
          <span
            className={pagination.pageSize === 10 ? 'active' : ''}
            onClick={() =>
              setPagination({ ...pagination, pageSize: 10, page: 1 })
            }
          >
            10
          </span>
          <span
            className={pagination.pageSize === 20 ? 'active' : ''}
            onClick={() =>
              setPagination({ ...pagination, pageSize: 20, page: 1 })
            }
          >
            20
          </span>
          <span
            className={pagination.pageSize === 30 ? 'active' : ''}
            onClick={() =>
              setPagination({ ...pagination, pageSize: 30, page: 1 })
            }
          >
            30
          </span>
        </div>
      </CardTitle>
      <CardSubTitle>
        <TableItem alignCenter>ID</TableItem>
        <TableItem>Номер договора</TableItem>
        <TableItem>Контрагент</TableItem>
        <TableItem>Дата</TableItem>
      </CardSubTitle>
      {contractListLoading && (
        <LoadingRowContainer>
          <FontAwesomeIcon icon={faSpinner} size='6x' pulse color='lightblue' />
        </LoadingRowContainer>
      )}
      {!contractListLoading &&
        contractListData &&
        contractListData.contract.list.ok &&
        contractListData.contract.list.record!.map((c) => {
          const d = new Date(c.createdAt).toLocaleDateString()
          const l = `${fileLink}${c.fileStorageItemID}`
          return (
            <CardRow key={c.id}>
              <TableItem alignCenter>{c.id}</TableItem>
              <TableItem>{c.number}</TableItem>
              <TableItem>
                {c.contractor?.ok && c.contractor.record?.fillName}
              </TableItem>
              <TableItem>{d}</TableItem>
              <TableItem>
                <a href={l} target='_blanc' rel='nofollow noopener'>
                  Договор
                </a>
              </TableItem>
              <TableItem>
                <FontAwesomeIcon
                  icon={faPencilAlt}
                  size='2x'
                  onClick={() => onEditContractClick(c.id)}
                />
              </TableItem>
            </CardRow>
          )
        })}
      {contractModal.isOpen && (
        <ContractModal
          setModal={setContractModal}
          contactId={contractModal.contractId}
        />
      )}
    </ContractContainer>
  )
}

export default ContractPage
