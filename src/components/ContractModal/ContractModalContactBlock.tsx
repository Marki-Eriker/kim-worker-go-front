import React from 'react'
import { CardRow, CardSubTitle } from './styles'

interface Props {
  email: string
  phone: string
}

const ContractModalContactBlock: React.FC<Props> = ({ email, phone }) => {
  return (
    <React.Fragment>
      <CardSubTitle>Контактная информация</CardSubTitle>
      <CardRow>Телефон:&nbsp; {phone && phone}</CardRow>
      <CardRow>Электронная почта:&nbsp; {email && email}</CardRow>
    </React.Fragment>
  )
}

export default ContractModalContactBlock
