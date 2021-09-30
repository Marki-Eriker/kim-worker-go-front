/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ContractFindInput, ContractMediumType, ContractorType } from "./globalTypes";

// ====================================================
// GraphQL query operation: contractFindQuery
// ====================================================

export interface contractFindQuery_contract_find_error {
  __typename: "InternalErrorProblem" | "UnauthorizedErrorProblem" | "UnknowErrorProblem" | "ForbiddenErrorProblem" | "ValidationErrorProblem";
  message: string;
}

export interface contractFindQuery_contract_find_record_serviceRequest_error {
  __typename: "InternalErrorProblem" | "UnauthorizedErrorProblem" | "UnknowErrorProblem" | "ForbiddenErrorProblem" | "ValidationErrorProblem";
  message: string;
}

export interface contractFindQuery_contract_find_record_serviceRequest_record_serviceType_error {
  __typename: "InternalErrorProblem" | "UnauthorizedErrorProblem" | "UnknowErrorProblem" | "ForbiddenErrorProblem" | "ValidationErrorProblem";
  message: string;
}

export interface contractFindQuery_contract_find_record_serviceRequest_record_serviceType_record {
  __typename: "ServiceType";
  id: any;
  name: string;
}

export interface contractFindQuery_contract_find_record_serviceRequest_record_serviceType {
  __typename: "ServiceTypeGetOutput";
  ok: boolean;
  error: contractFindQuery_contract_find_record_serviceRequest_record_serviceType_error[] | null;
  record: contractFindQuery_contract_find_record_serviceRequest_record_serviceType_record | null;
}

export interface contractFindQuery_contract_find_record_serviceRequest_record_contractor_error {
  __typename: "InternalErrorProblem" | "UnauthorizedErrorProblem" | "UnknowErrorProblem" | "ForbiddenErrorProblem" | "ValidationErrorProblem";
  message: string;
}

export interface contractFindQuery_contract_find_record_serviceRequest_record_contractor_record_person_error {
  __typename: "InternalErrorProblem" | "UnauthorizedErrorProblem" | "UnknowErrorProblem" | "ForbiddenErrorProblem" | "ValidationErrorProblem";
  message: string;
}

export interface contractFindQuery_contract_find_record_serviceRequest_record_contractor_record_person_record {
  __typename: "Person";
  id: any;
  email: string | null;
  phone: string | null;
}

export interface contractFindQuery_contract_find_record_serviceRequest_record_contractor_record_person {
  __typename: "PersonFindOutput";
  ok: boolean;
  error: contractFindQuery_contract_find_record_serviceRequest_record_contractor_record_person_error[] | null;
  record: contractFindQuery_contract_find_record_serviceRequest_record_contractor_record_person_record | null;
}

export interface contractFindQuery_contract_find_record_serviceRequest_record_contractor_record {
  __typename: "Contractor";
  id: any;
  fillName: string;
  contractorType: ContractorType;
  person: contractFindQuery_contract_find_record_serviceRequest_record_contractor_record_person | null;
}

export interface contractFindQuery_contract_find_record_serviceRequest_record_contractor {
  __typename: "ContractorGetOutput";
  ok: boolean;
  error: contractFindQuery_contract_find_record_serviceRequest_record_contractor_error[] | null;
  record: contractFindQuery_contract_find_record_serviceRequest_record_contractor_record | null;
}

export interface contractFindQuery_contract_find_record_serviceRequest_record_organizationContact_error {
  __typename: "InternalErrorProblem" | "UnauthorizedErrorProblem" | "UnknowErrorProblem" | "ForbiddenErrorProblem" | "ValidationErrorProblem";
  message: string;
}

export interface contractFindQuery_contract_find_record_serviceRequest_record_organizationContact_record {
  __typename: "OrganizationContact";
  id: any;
  phone: string | null;
  email: string | null;
}

export interface contractFindQuery_contract_find_record_serviceRequest_record_organizationContact {
  __typename: "OrganizationContactGetOutput";
  ok: boolean;
  error: contractFindQuery_contract_find_record_serviceRequest_record_organizationContact_error[] | null;
  record: contractFindQuery_contract_find_record_serviceRequest_record_organizationContact_record | null;
}

export interface contractFindQuery_contract_find_record_serviceRequest_record {
  __typename: "Request";
  id: any;
  contractMediumType: ContractMediumType;
  serviceType: contractFindQuery_contract_find_record_serviceRequest_record_serviceType | null;
  contractor: contractFindQuery_contract_find_record_serviceRequest_record_contractor | null;
  organizationContact: contractFindQuery_contract_find_record_serviceRequest_record_organizationContact | null;
}

export interface contractFindQuery_contract_find_record_serviceRequest {
  __typename: "RequestInfoOutput";
  ok: boolean;
  error: contractFindQuery_contract_find_record_serviceRequest_error[] | null;
  record: contractFindQuery_contract_find_record_serviceRequest_record | null;
}

export interface contractFindQuery_contract_find_record_paymentInvoice_error {
  __typename: "InternalErrorProblem" | "UnauthorizedErrorProblem" | "UnknowErrorProblem" | "ForbiddenErrorProblem" | "ValidationErrorProblem";
  message: string;
}

export interface contractFindQuery_contract_find_record_paymentInvoice_record_confirmation_error {
  __typename: "InternalErrorProblem" | "UnauthorizedErrorProblem" | "UnknowErrorProblem" | "ForbiddenErrorProblem" | "ValidationErrorProblem";
  message: string;
}

export interface contractFindQuery_contract_find_record_paymentInvoice_record_confirmation_record {
  __typename: "PaymentConfirmation";
  id: any;
  fileID: any;
  proven: boolean;
}

export interface contractFindQuery_contract_find_record_paymentInvoice_record_confirmation {
  __typename: "PaymentConfirmationFindOutput";
  ok: boolean;
  error: contractFindQuery_contract_find_record_paymentInvoice_record_confirmation_error[] | null;
  record: contractFindQuery_contract_find_record_paymentInvoice_record_confirmation_record | null;
}

export interface contractFindQuery_contract_find_record_paymentInvoice_record {
  __typename: "PaymentInvoice";
  id: any;
  createdAt: any;
  fileID: any;
  confirmation: contractFindQuery_contract_find_record_paymentInvoice_record_confirmation | null;
}

export interface contractFindQuery_contract_find_record_paymentInvoice {
  __typename: "PaymentInvoiceFindOutput";
  ok: boolean;
  error: contractFindQuery_contract_find_record_paymentInvoice_error[] | null;
  record: contractFindQuery_contract_find_record_paymentInvoice_record[] | null;
}

export interface contractFindQuery_contract_find_record {
  __typename: "Contract";
  id: any;
  number: string;
  createdAt: any;
  fileStorageItemID: any;
  serviceRequest: contractFindQuery_contract_find_record_serviceRequest | null;
  paymentInvoice: contractFindQuery_contract_find_record_paymentInvoice | null;
}

export interface contractFindQuery_contract_find {
  __typename: "ContractFindOutput";
  ok: boolean;
  error: contractFindQuery_contract_find_error[] | null;
  record: contractFindQuery_contract_find_record | null;
}

export interface contractFindQuery_contract {
  __typename: "ContractQuery";
  id: string;
  find: contractFindQuery_contract_find;
}

export interface contractFindQuery {
  contract: contractFindQuery_contract;
}

export interface contractFindQueryVariables {
  input: ContractFindInput;
}
