/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ContractCreateInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: createContractMutation
// ====================================================

export interface createContractMutation_contract_create_error {
  __typename: "InternalErrorProblem" | "UnknowErrorProblem" | "UnauthorizedErrorProblem" | "ValidationErrorProblem" | "ForbiddenErrorProblem";
  message: string;
}

export interface createContractMutation_contract_create_record {
  __typename: "Contract";
  id: any;
  number: string;
  fileStorageItemID: any;
}

export interface createContractMutation_contract_create {
  __typename: "ContractCreateOutput";
  ok: boolean;
  error: createContractMutation_contract_create_error[] | null;
  record: createContractMutation_contract_create_record | null;
}

export interface createContractMutation_contract {
  __typename: "ContractMutation";
  create: createContractMutation_contract_create;
}

export interface createContractMutation {
  contract: createContractMutation_contract;
}

export interface createContractMutationVariables {
  input: ContractCreateInput;
}
