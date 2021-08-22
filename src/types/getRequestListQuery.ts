/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { RequestListInput, RequestStatus } from "./globalTypes";

// ====================================================
// GraphQL query operation: getRequestListQuery
// ====================================================

export interface getRequestListQuery_request_list_error {
  __typename: "InternalErrorProblem" | "UnknowErrorProblem" | "UnauthorizedErrorProblem" | "ValidationErrorProblem" | "ForbiddenErrorProblem";
  message: string;
}

export interface getRequestListQuery_request_list_pagination {
  __typename: "PaginationOutput";
  totalItems: number;
  totalPages: number;
  page: number;
  itemsPerPage: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export interface getRequestListQuery_request_list_record_serviceType_error {
  __typename: "InternalErrorProblem" | "UnknowErrorProblem" | "UnauthorizedErrorProblem" | "ValidationErrorProblem" | "ForbiddenErrorProblem";
  message: string;
}

export interface getRequestListQuery_request_list_record_serviceType_record {
  __typename: "ServiceType";
  id: any;
  name: string;
}

export interface getRequestListQuery_request_list_record_serviceType {
  __typename: "ServiceTypeGetOutput";
  ok: boolean;
  error: getRequestListQuery_request_list_record_serviceType_error[] | null;
  record: getRequestListQuery_request_list_record_serviceType_record | null;
}

export interface getRequestListQuery_request_list_record_contractor_error {
  __typename: "InternalErrorProblem" | "UnknowErrorProblem" | "UnauthorizedErrorProblem" | "ValidationErrorProblem" | "ForbiddenErrorProblem";
  message: string;
}

export interface getRequestListQuery_request_list_record_contractor_record {
  __typename: "Contractor";
  id: any;
  shortName: string | null;
}

export interface getRequestListQuery_request_list_record_contractor {
  __typename: "ContractorGetOutput";
  ok: boolean;
  error: getRequestListQuery_request_list_record_contractor_error[] | null;
  record: getRequestListQuery_request_list_record_contractor_record | null;
}

export interface getRequestListQuery_request_list_record {
  __typename: "Request";
  id: any;
  status: RequestStatus;
  createdAt: any;
  contractFilledTemplateID: any | null;
  serviceType: getRequestListQuery_request_list_record_serviceType | null;
  contractor: getRequestListQuery_request_list_record_contractor | null;
}

export interface getRequestListQuery_request_list {
  __typename: "RequestListOutput";
  ok: boolean;
  error: getRequestListQuery_request_list_error[] | null;
  pagination: getRequestListQuery_request_list_pagination | null;
  record: getRequestListQuery_request_list_record[] | null;
}

export interface getRequestListQuery_request {
  __typename: "RequestQuery";
  id: string;
  list: getRequestListQuery_request_list;
}

export interface getRequestListQuery {
  request: getRequestListQuery_request;
}

export interface getRequestListQueryVariables {
  input: RequestListInput;
}
