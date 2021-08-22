import React from 'react'
import { CardRow, CardSubTitle } from './styles'

interface Props {
  mediumType: string | undefined
  name: string | undefined
}

const RequestModalMainBlock: React.FC<Props> = ({ mediumType, name }) => {
  return (
    <React.Fragment>
      <CardSubTitle>Общая информация</CardSubTitle>
      <CardRow>
        Форма договора:&nbsp;
        {mediumType
          ? mediumType === 'electronic'
            ? 'Электронная'
            : 'Бумажная'
          : 'нет данных'}
      </CardRow>
      <CardRow>
        Полное наименование:&nbsp;
        {name ? name : 'нет данных'}
      </CardRow>
    </React.Fragment>
  )
}

export default RequestModalMainBlock
