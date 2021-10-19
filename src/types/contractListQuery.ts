/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ContractListInput } from "./globalTypes";

// ====================================================
// GraphQL query operation: contractListQuery
// ====================================================

export interface contractListQuery_contract_list_error {
  __typename: "ValidationErrorProblem" | "ForbiddenErrorProblem" | "UnknowErrorProblem" | "InternalErrorProblem" | "UnauthorizedErrorProblem";
  message: string;
}

export interface contractListQuery_contract_list_pagination {
  __typename: "PaginationOutput";
  totalItems: number;
  totalPages: number;
  page: number;
  itemsPerPage: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export interface contractListQuery_contract_list_record_contractor_error {
  __typename: "ValidationErrorProblem" | "ForbiddenErrorProblem" | "UnknowErrorProblem" | "InternalErrorProblem" | "UnauthorizedErrorProblem";
  message: string;
}

export interface contractListQuery_contract_list_record_contractor_record {
  __typename: "Contractor";
  id: any;
  fillName: string;
}

export interface contractListQuery_contract_list_record_contractor {
  __typename: "ContractorGetOutput";
  ok: boolean;
  error: contractListQuery_contract_list_record_contractor_error[] | null;
  record: contractListQuery_contract_list_record_contractor_record | null;
}

export interface contractListQuery_contract_list_record {
  __typename: "Contract";
  id: any;
  number: string;
  createdAt: any;
  fileStorageItemID: any;
  contractor: contractListQuery_contract_list_record_contractor | null;
}

export interface contractListQuery_contract_list {
  __typename: "ContactListOutput";
  ok: boolean;
  error: contractListQuery_contract_list_error[] | null;
  pagination: contractListQuery_contract_list_pagination | null;
  record: contractListQuery_contract_list_record[] | null;
}

export interface contractListQuery_contract {
  __typename: "ContractQuery";
  id: string;
  list: contractListQuery_contract_list;
}

export interface contractListQuery {
  contract: contractListQuery_contract;
}

export interface contractListQueryVariables {
  input: ContractListInput;
}
