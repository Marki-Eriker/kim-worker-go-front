import React from 'react'
import { CardRow, CardSubTitle } from './styles'

interface Props {
  type: string | null | undefined
  fullName: string | null | undefined
}

const ContactModalMainBlock: React.FC<Props> = ({ type, fullName }) => {
  return (
    <React.Fragment>
      <CardSubTitle>Основная информация</CardSubTitle>
      <CardRow>
        Формат договора:&nbsp;{' '}
        {type && type === 'electronic' ? 'Электронный' : 'Бумажный'}
      </CardRow>
      <CardRow>Контрагент:&nbsp; {fullName}</CardRow>
    </React.Fragment>
  )
}

export default ContactModalMainBlock
