/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { RequestInfoInput } from "./globalTypes";

// ====================================================
// GraphQL query operation: requestContractInfo
// ====================================================

export interface requestContractInfo_request_info_error {
  __typename: "ValidationErrorProblem" | "ForbiddenErrorProblem" | "UnknowErrorProblem" | "InternalErrorProblem" | "UnauthorizedErrorProblem";
  message: string;
}

export interface requestContractInfo_request_info_record_contracts_error {
  __typename: "ValidationErrorProblem" | "ForbiddenErrorProblem" | "UnknowErrorProblem" | "InternalErrorProblem" | "UnauthorizedErrorProblem";
  message: string;
}

export interface requestContractInfo_request_info_record_contracts_record {
  __typename: "Contract";
  number: string;
  fileStorageItemID: any;
}

export interface requestContractInfo_request_info_record_contracts {
  __typename: "ContactListOutput";
  ok: boolean;
  error: requestContractInfo_request_info_record_contracts_error[] | null;
  record: requestContractInfo_request_info_record_contracts_record[] | null;
}

export interface requestContractInfo_request_info_record {
  __typename: "Request";
  id: any;
  contracts: requestContractInfo_request_info_record_contracts | null;
}

export interface requestContractInfo_request_info {
  __typename: "RequestInfoOutput";
  ok: boolean;
  error: requestContractInfo_request_info_error[] | null;
  record: requestContractInfo_request_info_record | null;
}

export interface requestContractInfo_request {
  __typename: "RequestQuery";
  id: string;
  info: requestContractInfo_request_info;
}

export interface requestContractInfo {
  request: requestContractInfo_request;
}

export interface requestContractInfoVariables {
  input: RequestInfoInput;
}
