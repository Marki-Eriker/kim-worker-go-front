import { gql } from '@apollo/client'

export const CONTRACT_FIND_QUERY = gql`
  query contractFindQuery($input: ContractFindInput!) {
    contract {
      id
      find(input: $input) {
        ok
        error {
          message
        }
        record {
          id
          number
          createdAt
          fileStorageItemID
          serviceRequest {
            ok
            error {
              message
            }
            record {
              id
              contractMediumType
              serviceType {
                ok
                error {
                  message
                }
                record {
                  id
                  name
                }
              }
              contractor {
                ok
                error {
                  message
                }
                record {
                  id
                  fillName
                  contractorType
                  person {
                    ok
                    error {
                      message
                    }
                    record {
                      id
                      email
                      phone
                    }
                  }
                }
              }
              organizationContact {
                ok
                error {
                  message
                }
                record {
                  id
                  phone
                  email
                }
              }
            }
          }
          paymentInvoice {
            ok
            error {
              message
            }
            record {
              id
              createdAt
              fileID
              confirmation {
                ok
                error {
                  message
                }
                record {
                  id
                  fileID
                  proven
                }
              }
            }
          }
        }
      }
    }
  }
`

export const CONTRACT_INVOICE_FIND_QUERY = gql`
  query contractInvoiceFindQuery($input: ContractFindInput!) {
    contract {
      id
      find(input: $input) {
        ok
        error {
          message
        }
        record {
          id
          paymentInvoice {
            ok
            error {
              message
            }
            record {
              id
              createdAt
              fileID
              confirmation {
                ok
                error {
                  message
                }
                record {
                  id
                  fileID
                  proven
                }
              }
            }
          }
        }
      }
    }
  }
`

export const APPROVE_CONFIRMATION_MUTATION = gql`
  mutation appriveConfirmationMutation(
    $input: PaymentConfirmationApproveInput!
  ) {
    payment {
      approveConfirmation(input: $input) {
        ok
        error {
          message
        }
        record {
          id
          proven
        }
      }
    }
  }
`

export const INVOICE_CREATE_MUTATION = gql`
  mutation invoiceCreateMutation($input: PaymentInvoiceCreateInput!) {
    payment {
      createInvoice(input: $input) {
        ok
        error {
          message
        }
        record {
          id
          contractID
          fileID
          createdAt
        }
      }
    }
  }
`
