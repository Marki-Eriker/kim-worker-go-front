import React, { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import { CONTRACT_FIND_QUERY } from './gql'
import {
  contractFindQuery,
  contractFindQuery_contract_find_record,
  contractFindQueryVariables,
} from '../../types/contractFindQuery'
import { ContractModalContainer } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner, faTimes } from '@fortawesome/free-solid-svg-icons'
import ContactModalMainBlock from './ContactModalMainBlock'
import ContractModalContactBlock from './ContractModalContactBlock'
import { ContractorType } from '../../types/globalTypes'
import ContractModalInvoiceBlock from './ContractModalInvoiceBlock'

interface Props {
  setModal: React.Dispatch<
    React.SetStateAction<{ isOpen: boolean; contractId: number }>
  >
  contactId: number
}

const ContractModal: React.FC<Props> = ({ setModal, contactId }) => {
  const [contract, setContract] =
    useState<contractFindQuery_contract_find_record>()

  const {
    data: contractData,
    loading: contractLoading,
    error: contractError,
  } = useQuery<contractFindQuery, contractFindQueryVariables>(
    CONTRACT_FIND_QUERY,
    { variables: { input: { contractID: contactId } } },
  )

  useEffect(() => {
    if (contractData && contractData.contract.find.ok) {
      setContract(contractData.contract.find.record!)
    }
  }, [contractData])

  if (contractLoading) {
    return (
      <ContractModalContainer load={true}>
        <FontAwesomeIcon
          className='close'
          icon={faTimes}
          size='2x'
          onClick={() => setModal({ isOpen: false, contractId: 0 })}
        />
        <FontAwesomeIcon
          className='loading'
          icon={faSpinner}
          size='6x'
          pulse
          color='lightblue'
        />
      </ContractModalContainer>
    )
  }

  if (contractError) {
    return (
      <ContractModalContainer load={true}>
        <FontAwesomeIcon
          className='close'
          icon={faTimes}
          size='2x'
          onClick={() => setModal({ isOpen: false, contractId: 0 })}
        />
        <h2>Не удалось загрузить информацию по контракту</h2>
      </ContractModalContainer>
    )
  }

  return (
    <ContractModalContainer>
      <FontAwesomeIcon
        className='close'
        icon={faTimes}
        size='2x'
        onClick={() => setModal({ isOpen: false, contractId: 0 })}
      />
      <h2>Договор №{contract?.number}</h2>
      <span className='contractType'>
        {contract?.serviceRequest?.ok &&
          contract?.serviceRequest.record?.serviceType?.record?.name}
      </span>
      <ContactModalMainBlock
        type={contract?.serviceRequest?.record?.contractMediumType}
        fullName={
          contract?.serviceRequest?.record?.contractor?.record?.fillName
        }
      />
      {contract &&
      contract?.serviceRequest?.record?.contractor?.record?.contractorType ===
        ContractorType.organization ? (
        <ContractModalContactBlock
          email={
            contract.serviceRequest?.record?.organizationContact?.record?.email!
          }
          phone={
            contract.serviceRequest?.record?.organizationContact?.record?.phone!
          }
        />
      ) : (
        <ContractModalContactBlock
          email={
            contract?.serviceRequest?.record?.contractor?.record?.person?.record
              ?.email!
          }
          phone={
            contract?.serviceRequest?.record?.contractor?.record?.person?.record
              ?.phone!
          }
        />
      )}
      <ContractModalInvoiceBlock
        invoice={contract && contract.paymentInvoice?.record!}
        contractId={contactId}
      />
    </ContractModalContainer>
  )
}

export default ContractModal
