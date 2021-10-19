/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UserFindInput, BaseRole } from "./globalTypes";

// ====================================================
// GraphQL query operation: userFindQuery
// ====================================================

export interface userFindQuery_user_find_error {
  __typename: "ValidationErrorProblem" | "ForbiddenErrorProblem" | "UnknowErrorProblem" | "InternalErrorProblem" | "UnauthorizedErrorProblem";
  message: string;
}

export interface userFindQuery_user_find_record_access_error {
  __typename: "ValidationErrorProblem" | "ForbiddenErrorProblem" | "UnknowErrorProblem" | "InternalErrorProblem" | "UnauthorizedErrorProblem";
  message: string;
}

export interface userFindQuery_user_find_record_access_record {
  __typename: "Access";
  id: any;
  name: string;
}

export interface userFindQuery_user_find_record_access {
  __typename: "AccessFindOutput";
  ok: boolean;
  error: userFindQuery_user_find_record_access_error[] | null;
  record: userFindQuery_user_find_record_access_record[] | null;
}

export interface userFindQuery_user_find_record {
  __typename: "User";
  id: any;
  createdAt: any;
  updatedAt: any;
  email: string;
  fullName: string;
  baseRole: BaseRole;
  serviceTypes: any[];
  access: userFindQuery_user_find_record_access;
}

export interface userFindQuery_user_find {
  __typename: "UserFindOutput";
  ok: boolean;
  error: userFindQuery_user_find_error[] | null;
  record: userFindQuery_user_find_record | null;
}

export interface userFindQuery_user {
  __typename: "UserQuery";
  id: string;
  find: userFindQuery_user_find;
}

export interface userFindQuery {
  user: userFindQuery_user;
}

export interface userFindQueryVariables {
  input: UserFindInput;
}
