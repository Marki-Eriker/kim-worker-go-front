import React, { useState } from 'react'
import { OrderBy } from '../../types/globalTypes'
import { useQuery } from '@apollo/client'
import {
  userListQuery,
  userListQueryVariables,
} from '../../types/userListQuery'
import { USER_LIST_QUERY } from './gql'
import {
  Card,
  CardRow,
  CardSubTitle,
  CardTitle,
  TableItem,
  UserPageContainer,
} from './styles'
import { Paginator, UserModal } from '../../components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'

const UserPage = () => {
  const [pagination, setPagination] = useState({
    page: 1,
    pageSize: 20,
    orderField: 'id',
    orderBy: OrderBy.ASC,
  })

  const setPage = (page: number) => {
    setPagination({ ...pagination, page })
  }

  const [userModal, setUserModal] = useState({
    isOpen: false,
    userId: 0,
  })

  const onRowClick = (id: number) => {
    setUserModal({ isOpen: true, userId: id })
  }

  const { data: userListData, loading: userListLoading } = useQuery<
    userListQuery,
    userListQueryVariables
  >(USER_LIST_QUERY, {
    variables: {
      input: { filter: { ...pagination } },
    },
  })
  const usersList =
    userListData && userListData.user.list.ok && userListData.user.list.record

  return (
    <UserPageContainer>
      <h1>Пользователи</h1>
      <Card>
        <CardTitle>
          {!userListLoading && userListData && (
            <Paginator
              paginationInfo={userListData.user.list.pagination!}
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
          <TableItem>ID</TableItem>
          <TableItem>ФИО</TableItem>
          <TableItem>Почта</TableItem>
        </CardSubTitle>
        {usersList &&
          usersList.map((u) => (
            <CardRow key={u.id}>
              <TableItem>{u.id}</TableItem>
              <TableItem>{u.fullName}</TableItem>
              <TableItem>{u.email}</TableItem>
              <TableItem>
                <FontAwesomeIcon
                  icon={faPencilAlt}
                  size='2x'
                  onClick={() => onRowClick(u.id)}
                />
              </TableItem>
            </CardRow>
          ))}
      </Card>
      {userModal.isOpen && (
        <UserModal
          userId={userModal.userId}
          close={() => setUserModal({ isOpen: false, userId: 0 })}
        />
      )}
    </UserPageContainer>
  )
}

export default UserPage
