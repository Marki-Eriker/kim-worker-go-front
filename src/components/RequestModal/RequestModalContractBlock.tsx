import React from 'react'
import { CardRow, CardSubTitle } from './styles'
import { requestInfo_request_info_record_signatory_record } from '../../types/requestInfo'

interface Props {
  data: requestInfo_request_info_record_signatory_record | null | undefined
}

const RequestModalContractBlock: React.FC<Props> = ({ data }) => {
  return (
    <React.Fragment>
      <CardSubTitle>Договор будет заключаться в лице</CardSubTitle>
      <CardRow>
        Кого:&nbsp;
        {data?.name ? data.name : 'нет данных'}
      </CardRow>
      <CardRow>
        Действующего на основании:&nbsp;
        {data?.actingBasis ? data.actingBasis : 'нет данных'}
      </CardRow>
      {data && data.actingBasis && data.actingBasis !== 'Устава' ? (
        <>
          <CardRow>
            Доверенность №:&nbsp;
            {data.warrantNumber}
          </CardRow>
          <CardRow>
            Выдана:&nbsp;
            {data.warrantDate}
          </CardRow>
        </>
      ) : null}
    </React.Fragment>
  )
}

export default RequestModalContractBlock
