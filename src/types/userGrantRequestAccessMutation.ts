/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UserGrantRequestAccessInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: userGrantRequestAccessMutation
// ====================================================

export interface userGrantRequestAccessMutation_user_grantRequestAccess_error {
  __typename: "InternalErrorProblem" | "UnauthorizedErrorProblem" | "UnknowErrorProblem" | "ForbiddenErrorProblem" | "ValidationErrorProblem";
  message: string;
}

export interface userGrantRequestAccessMutation_user_grantRequestAccess_record {
  __typename: "User";
  id: any;
  serviceTypes: any[];
}

export interface userGrantRequestAccessMutation_user_grantRequestAccess {
  __typename: "UserGrantRequestAccessOutput";
  ok: boolean;
  error: userGrantRequestAccessMutation_user_grantRequestAccess_error[] | null;
  record: userGrantRequestAccessMutation_user_grantRequestAccess_record | null;
}

export interface userGrantRequestAccessMutation_user {
  __typename: "UserMutation";
  grantRequestAccess: userGrantRequestAccessMutation_user_grantRequestAccess;
}

export interface userGrantRequestAccessMutation {
  user: userGrantRequestAccessMutation_user;
}

export interface userGrantRequestAccessMutationVariables {
  input: UserGrantRequestAccessInput;
}
