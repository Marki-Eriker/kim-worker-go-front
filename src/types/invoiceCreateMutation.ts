/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PaymentInvoiceCreateInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: invoiceCreateMutation
// ====================================================

export interface invoiceCreateMutation_payment_createInvoice_error {
  __typename: "InternalErrorProblem" | "UnauthorizedErrorProblem" | "UnknowErrorProblem" | "ForbiddenErrorProblem" | "ValidationErrorProblem";
  message: string;
}

export interface invoiceCreateMutation_payment_createInvoice_record {
  __typename: "PaymentInvoice";
  id: any;
  contractID: any;
  fileID: any;
  createdAt: any;
}

export interface invoiceCreateMutation_payment_createInvoice {
  __typename: "PaymentInvoiceCreateOutput";
  ok: boolean;
  error: invoiceCreateMutation_payment_createInvoice_error[] | null;
  record: invoiceCreateMutation_payment_createInvoice_record | null;
}

export interface invoiceCreateMutation_payment {
  __typename: "PaymentMutation";
  createInvoice: invoiceCreateMutation_payment_createInvoice;
}

export interface invoiceCreateMutation {
  payment: invoiceCreateMutation_payment;
}

export interface invoiceCreateMutationVariables {
  input: PaymentInvoiceCreateInput;
}
