/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ContractFindInput } from "./globalTypes";

// ====================================================
// GraphQL query operation: contractInvoiceFindQuery
// ====================================================

export interface contractInvoiceFindQuery_contract_find_error {
  __typename: "ValidationErrorProblem" | "UnknowErrorProblem" | "InternalErrorProblem" | "UnauthorizedErrorProblem" | "ForbiddenErrorProblem";
  message: string;
}

export interface contractInvoiceFindQuery_contract_find_record_paymentInvoice_error {
  __typename: "ValidationErrorProblem" | "UnknowErrorProblem" | "InternalErrorProblem" | "UnauthorizedErrorProblem" | "ForbiddenErrorProblem";
  message: string;
}

export interface contractInvoiceFindQuery_contract_find_record_paymentInvoice_record_confirmation_error {
  __typename: "ValidationErrorProblem" | "UnknowErrorProblem" | "InternalErrorProblem" | "UnauthorizedErrorProblem" | "ForbiddenErrorProblem";
  message: string;
}

export interface contractInvoiceFindQuery_contract_find_record_paymentInvoice_record_confirmation_record {
  __typename: "PaymentConfirmation";
  id: any;
  fileID: any;
  proven: boolean;
}

export interface contractInvoiceFindQuery_contract_find_record_paymentInvoice_record_confirmation {
  __typename: "PaymentConfirmationFindOutput";
  ok: boolean;
  error: contractInvoiceFindQuery_contract_find_record_paymentInvoice_record_confirmation_error[] | null;
  record: contractInvoiceFindQuery_contract_find_record_paymentInvoice_record_confirmation_record | null;
}

export interface contractInvoiceFindQuery_contract_find_record_paymentInvoice_record {
  __typename: "PaymentInvoice";
  id: any;
  createdAt: any;
  fileID: any;
  confirmation: contractInvoiceFindQuery_contract_find_record_paymentInvoice_record_confirmation | null;
}

export interface contractInvoiceFindQuery_contract_find_record_paymentInvoice {
  __typename: "PaymentInvoiceFindOutput";
  ok: boolean;
  error: contractInvoiceFindQuery_contract_find_record_paymentInvoice_error[] | null;
  record: contractInvoiceFindQuery_contract_find_record_paymentInvoice_record[] | null;
}

export interface contractInvoiceFindQuery_contract_find_record {
  __typename: "Contract";
  id: any;
  paymentInvoice: contractInvoiceFindQuery_contract_find_record_paymentInvoice | null;
}

export interface contractInvoiceFindQuery_contract_find {
  __typename: "ContractFindOutput";
  ok: boolean;
  error: contractInvoiceFindQuery_contract_find_error[] | null;
  record: contractInvoiceFindQuery_contract_find_record | null;
}

export interface contractInvoiceFindQuery_contract {
  __typename: "ContractQuery";
  id: string;
  find: contractInvoiceFindQuery_contract_find;
}

export interface contractInvoiceFindQuery {
  contract: contractInvoiceFindQuery_contract;
}

export interface contractInvoiceFindQueryVariables {
  input: ContractFindInput;
}
