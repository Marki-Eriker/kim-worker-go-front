import { RequestStatus } from '../types/globalTypes'

export const statusVariants = [
  {
    id: 0,
    name: 'Любой статус',
  },
  {
    id: 1,
    name: 'Ожидает рассмотрения',
  },
  {
    id: 2,
    name: 'Отклонена',
  },
  {
    id: 3,
    name: 'Принята в работу',
  },
  {
    id: 4,
    name: 'Выполнена',
  },
]

export const getHumanityStatus = (status: RequestStatus): string => {
  switch (status) {
    case RequestStatus.accepted:
      return 'Принята в работу'
    case RequestStatus.completed:
      return 'Выполнена'
    case RequestStatus.pending:
      return 'Ожидает рассмотрения'
    case RequestStatus.rejected:
      return 'Отклонена'
  }
}
