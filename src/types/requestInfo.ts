/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { RequestInfoInput, ContractMediumType, RequestStatus } from "./globalTypes";

// ====================================================
// GraphQL query operation: requestInfo
// ====================================================

export interface requestInfo_request_info_error {
  __typename: "InternalErrorProblem" | "UnknowErrorProblem" | "UnauthorizedErrorProblem" | "ValidationErrorProblem" | "ForbiddenErrorProblem";
  message: string;
}

export interface requestInfo_request_info_record_contractor_error {
  __typename: "InternalErrorProblem" | "UnknowErrorProblem" | "UnauthorizedErrorProblem" | "ValidationErrorProblem" | "ForbiddenErrorProblem";
  message: string;
}

export interface requestInfo_request_info_record_contractor_record {
  __typename: "Contractor";
  id: any;
  fillName: string;
}

export interface requestInfo_request_info_record_contractor {
  __typename: "ContractorGetOutput";
  ok: boolean;
  error: requestInfo_request_info_record_contractor_error[] | null;
  record: requestInfo_request_info_record_contractor_record | null;
}

export interface requestInfo_request_info_record_organizationContact_error {
  __typename: "InternalErrorProblem" | "UnknowErrorProblem" | "UnauthorizedErrorProblem" | "ValidationErrorProblem" | "ForbiddenErrorProblem";
  message: string;
}

export interface requestInfo_request_info_record_organizationContact_record {
  __typename: "OrganizationContact";
  id: any;
  phone: string | null;
  email: string | null;
}

export interface requestInfo_request_info_record_organizationContact {
  __typename: "OrganizationContactGetOutput";
  ok: boolean;
  error: requestInfo_request_info_record_organizationContact_error[] | null;
  record: requestInfo_request_info_record_organizationContact_record | null;
}

export interface requestInfo_request_info_record_bankAccount_error {
  __typename: "InternalErrorProblem" | "UnknowErrorProblem" | "UnauthorizedErrorProblem" | "ValidationErrorProblem" | "ForbiddenErrorProblem";
  message: string;
}

export interface requestInfo_request_info_record_bankAccount_record {
  __typename: "BankAccount";
  id: any;
  accountNumber: string;
  correspondentNumber: string;
  bik: string;
  bankName: string;
}

export interface requestInfo_request_info_record_bankAccount {
  __typename: "BankAccountGetOutput";
  ok: boolean;
  error: requestInfo_request_info_record_bankAccount_error[] | null;
  record: requestInfo_request_info_record_bankAccount_record | null;
}

export interface requestInfo_request_info_record_signatory_error {
  __typename: "InternalErrorProblem" | "UnknowErrorProblem" | "UnauthorizedErrorProblem" | "ValidationErrorProblem" | "ForbiddenErrorProblem";
  message: string;
}

export interface requestInfo_request_info_record_signatory_record {
  __typename: "Signatory";
  id: any;
  name: string | null;
  actingBasis: string | null;
  warrantDate: any | null;
  warrantNumber: string | null;
}

export interface requestInfo_request_info_record_signatory {
  __typename: "SignatoryGetOutput";
  ok: boolean;
  error: requestInfo_request_info_record_signatory_error[] | null;
  record: requestInfo_request_info_record_signatory_record | null;
}

export interface requestInfo_request_info_record_ships_error {
  __typename: "InternalErrorProblem" | "UnknowErrorProblem" | "UnauthorizedErrorProblem" | "ValidationErrorProblem" | "ForbiddenErrorProblem";
  message: string;
}

export interface requestInfo_request_info_record_ships_record {
  __typename: "Ship";
  id: any;
  name: string;
  hullNumber: string | null;
  projectNumber: string | null;
  length: number | null;
  width: number | null;
  hullHeight: number | null;
  cubic: number | null;
  flag: string | null;
  shipConfirmParamsCertificateIds: any[] | null;
  ownerShipRightsCertificateIds: any[] | null;
}

export interface requestInfo_request_info_record_ships {
  __typename: "ShipGetOutput";
  ok: boolean;
  error: requestInfo_request_info_record_ships_error[] | null;
  record: requestInfo_request_info_record_ships_record[] | null;
}

export interface requestInfo_request_info_record_contracts_error {
  __typename: "InternalErrorProblem" | "UnknowErrorProblem" | "UnauthorizedErrorProblem" | "ValidationErrorProblem" | "ForbiddenErrorProblem";
  message: string;
}

export interface requestInfo_request_info_record_contracts_record {
  __typename: "Contract";
  number: string;
  fileStorageItemID: any;
}

export interface requestInfo_request_info_record_contracts {
  __typename: "ContactListOutput";
  ok: boolean;
  error: requestInfo_request_info_record_contracts_error[] | null;
  record: requestInfo_request_info_record_contracts_record[] | null;
}

export interface requestInfo_request_info_record {
  __typename: "Request";
  id: any;
  contractor: requestInfo_request_info_record_contractor | null;
  organizationContact: requestInfo_request_info_record_organizationContact | null;
  contractMediumType: ContractMediumType;
  contractFilledTemplateID: any | null;
  status: RequestStatus;
  createdAt: any;
  bankAccount: requestInfo_request_info_record_bankAccount | null;
  signatory: requestInfo_request_info_record_signatory | null;
  ships: requestInfo_request_info_record_ships | null;
  contracts: requestInfo_request_info_record_contracts | null;
}

export interface requestInfo_request_info {
  __typename: "RequestInfoOutput";
  ok: boolean;
  error: requestInfo_request_info_error[] | null;
  record: requestInfo_request_info_record | null;
}

export interface requestInfo_request {
  __typename: "RequestQuery";
  id: string;
  info: requestInfo_request_info;
}

export interface requestInfo {
  request: requestInfo_request;
}

export interface requestInfoVariables {
  input: RequestInfoInput;
}
