import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { getRequestListQuery_request_list_pagination } from '../../types/getRequestListQuery'
import { PaginatorContainer } from './styles'
import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faAngleLeft,
  faAngleRight,
} from '@fortawesome/free-solid-svg-icons'

interface Props {
  paginationInfo: getRequestListQuery_request_list_pagination
  setPage: (page: number) => void
}

const Paginator: React.FC<Props> = ({ paginationInfo, setPage }) => {
  const { totalPages, page, hasNextPage, hasPreviousPage } = paginationInfo

  return (
    <PaginatorContainer>
      {page - 10 < 1 ? (
        <FontAwesomeIcon icon={faAngleDoubleLeft} className='disabled' />
      ) : (
        <FontAwesomeIcon
          icon={faAngleDoubleLeft}
          onClick={() => setPage(page - 10)}
        />
      )}

      {!hasPreviousPage ? (
        <FontAwesomeIcon icon={faAngleLeft} className='disabled' />
      ) : (
        <FontAwesomeIcon icon={faAngleLeft} onClick={() => setPage(page - 1)} />
      )}

      <span className='page'>{page}</span>

      {!hasNextPage ? (
        <FontAwesomeIcon icon={faAngleRight} className='disabled' />
      ) : (
        <FontAwesomeIcon
          icon={faAngleRight}
          onClick={() => setPage(page + 1)}
        />
      )}

      {page + 10 > totalPages ? (
        <FontAwesomeIcon icon={faAngleDoubleRight} className='disabled' />
      ) : (
        <FontAwesomeIcon
          icon={faAngleDoubleRight}
          onClick={() => setPage(page + 10)}
        />
      )}
    </PaginatorContainer>
  )
}

export default Paginator
