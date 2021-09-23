import { gql } from '@apollo/client'
import { CORE_OUTPUT_FIELDS } from '../../common/gql'

export const REQUEST_INFO_CONTRACT_QUERY = gql`
  ${CORE_OUTPUT_FIELDS}
  query requestContractInfo($input: RequestInfoInput!) {
    request {
      id
      info(input: $input) {
        ...coreOutputFields
        record {
          id
          contracts {
            ...coreOutputFields
            record {
              number
              fileStorageItemID
            }
          }
        }
      }
    }
  }
`

export const REQUEST_INFO_QUERY = gql`
  ${CORE_OUTPUT_FIELDS}
  query requestInfo($input: RequestInfoInput!) {
    request {
      id
      info(input: $input) {
        ...coreOutputFields
        record {
          id
          contractor {
            ...coreOutputFields
            record {
              id
              fillName
              person {
                ...coreOutputFields
                record {
                  email
                  phone
                }
              }
            }
          }
          organizationContact {
            ...coreOutputFields
            record {
              id
              phone
              email
            }
          }
          contractMediumType
          contractFilledTemplateID
          status
          createdAt
          bankAccount {
            ...coreOutputFields
            record {
              id
              accountNumber
              correspondentNumber
              bik
              bankName
            }
          }
          signatory {
            ...coreOutputFields
            record {
              id
              name
              actingBasis
              warrantDate
              warrantNumber
            }
          }
          ships {
            ...coreOutputFields
            record {
              id
              name
              hullNumber
              projectNumber
              length
              width
              hullHeight
              cubic
              flag
              shipConfirmParamsCertificateIds
              ownerShipRightsCertificateIds
            }
          }
          contracts {
            ...coreOutputFields
            record {
              number
              fileStorageItemID
            }
          }
        }
      }
    }
  }
`

export const REQUEST_UPDATE_STATUS_MUTATION = gql`
  mutation updateRequestStatusMutation($input: RequestUpdateStatusInput!) {
    request {
      updateStatus(input: $input) {
        ok
        error {
          message
        }
        record {
          id
          status
        }
      }
    }
  }
`

export const CONTRACT_CREATE_MUTATION = gql`
  mutation createContractMutation($input: ContractCreateInput!) {
    contract {
      create(input: $input) {
        ok
        error {
          message
        }
        record {
          id
          number
          fileStorageItemID
        }
      }
    }
  }
`
