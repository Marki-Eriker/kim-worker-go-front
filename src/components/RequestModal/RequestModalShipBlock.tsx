import React from 'react'
import { requestInfo_request_info_record_ships_record } from '../../types/requestInfo'
import { CardRow, CardSubTitle } from './styles'
import { useReactiveVar } from '@apollo/client'
import { fileLinkVar } from '../../apollo'

interface Props {
  ships: requestInfo_request_info_record_ships_record[] | null | undefined
}

const RequestModalShipBlock: React.FC<Props> = ({ ships }) => {
  const fileLink = useReactiveVar(fileLinkVar)
  return (
    <React.Fragment>
      <CardSubTitle>Суда</CardSubTitle>
      {ships &&
        ships.map((s) => (
          <CardRow key={s.id}>
            Наименование: {s.name}, Проект: {s.projectNumber}, Флаг: {s.flag}
            <br />
            Длинна:{s.length}, Ширина: {s.width}, Высота борта: {s.hullHeight},
            Условный модуль: {s.cubic}
            <a
              href={`${fileLink}${
                s.ownerShipRightsCertificateIds &&
                s.ownerShipRightsCertificateIds[0]
              }`}
              target='_blank'
              rel='nofollow noopener noreferrer'
            >
              Право владения
            </a>
            <a
              href={`${fileLink}${
                s.shipConfirmParamsCertificateIds &&
                s.shipConfirmParamsCertificateIds[0]
              }`}
              target='_blank'
              rel='nofollow noopener noreferrer'
            >
              Параметры
            </a>
          </CardRow>
        ))}
    </React.Fragment>
  )
}

export default RequestModalShipBlock
