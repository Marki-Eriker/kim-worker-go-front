import React from 'react'
import { OrderBy } from '../../types/globalTypes'

interface Props {
  pagination: {
    page: number
    pageSize: number
    orderField: string
    orderBy: OrderBy
  }
  setPagination: React.Dispatch<
    React.SetStateAction<{
      page: number
      pageSize: number
      orderField: string
      orderBy: OrderBy
    }>
  >
}

const PaginationSize: React.FC<Props> = ({ pagination, setPagination }) => {
  return (
    <div className='paginationSize'>
      по
      <span
        className={pagination.pageSize === 10 ? 'active' : ''}
        onClick={() => setPagination({ ...pagination, pageSize: 10, page: 1 })}
      >
        10
      </span>
      <span
        className={pagination.pageSize === 20 ? 'active' : ''}
        onClick={() => setPagination({ ...pagination, pageSize: 20, page: 1 })}
      >
        20
      </span>
      <span
        className={pagination.pageSize === 30 ? 'active' : ''}
        onClick={() => setPagination({ ...pagination, pageSize: 30, page: 1 })}
      >
        30
      </span>
    </div>
  )
}

export default PaginationSize
