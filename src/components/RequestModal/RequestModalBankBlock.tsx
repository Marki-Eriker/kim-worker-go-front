import React from 'react'
import { CardRow, CardSubTitle } from './styles'
import { requestInfo_request_info_record_bankAccount_record } from '../../types/requestInfo'

interface Props {
  data: requestInfo_request_info_record_bankAccount_record | null | undefined
}

const RequestModalBankBlock: React.FC<Props> = ({ data }) => {
  return (
    <React.Fragment>
      <CardSubTitle>Банковские реквизиты</CardSubTitle>
      <CardRow>
        Расчетный счет:&nbsp;
        {data && data.accountNumber}
      </CardRow>
      <CardRow>
        Корреспондентский счет:&nbsp;
        {data && data.correspondentNumber}
      </CardRow>
      <CardRow>
        Банк:&nbsp;
        {data && data.bankName}
      </CardRow>
      <CardRow>
        БИК:&nbsp;
        {data && data.bik}
      </CardRow>
    </React.Fragment>
  )
}

export default RequestModalBankBlock
