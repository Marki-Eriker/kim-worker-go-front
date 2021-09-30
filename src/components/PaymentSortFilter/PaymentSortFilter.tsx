import React from 'react'
import { PaymentFilter } from '../../types/globalTypes'
import { PaymentFilterContainer } from './styles'

interface Props {
  currentValue: PaymentFilter
  setFilterValue: React.Dispatch<React.SetStateAction<PaymentFilter>>
}

const PaymentSortFilter: React.FC<Props> = ({
  currentValue,
  setFilterValue,
}) => {
  return (
    <PaymentFilterContainer>
      <span
        onClick={() => setFilterValue(PaymentFilter.ALL)}
        className={`filter ${
          currentValue === PaymentFilter.ALL ? 'active' : ''
        }`}
      >
        Все
      </span>
      <span
        onClick={() => setFilterValue(PaymentFilter.NOT_PAID)}
        className={`filter ${
          currentValue === PaymentFilter.NOT_PAID ? 'active' : ''
        }`}
      >
        Не оплачены
      </span>
      <span
        onClick={() => setFilterValue(PaymentFilter.NOT_VERIFIED)}
        className={`filter ${
          currentValue === PaymentFilter.NOT_VERIFIED ? 'active' : ''
        }`}
      >
        Оплаты не проверены
      </span>
    </PaymentFilterContainer>
  )
}

export default PaymentSortFilter
