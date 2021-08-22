import React from 'react'
import { CardRow, CardSubTitle } from './styles'
import { requestInfo_request_info_record_organizationContact_record } from '../../types/requestInfo'

interface Props {
  data:
    | requestInfo_request_info_record_organizationContact_record
    | null
    | undefined
}

const RequestModalContactBlock: React.FC<Props> = ({ data }) => {
  return (
    <React.Fragment>
      <CardSubTitle>Контакты</CardSubTitle>
      <CardRow>
        Телефон:&nbsp;
        {data && data.phone ? data.phone : 'нет данных'}
      </CardRow>
      <CardRow>
        Электронная почта:&nbsp;
        {data && data.email ? data.email : 'нет данных'}
      </CardRow>
    </React.Fragment>
  )
}

export default RequestModalContactBlock
