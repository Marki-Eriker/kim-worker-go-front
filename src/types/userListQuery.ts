/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UserListInput } from "./globalTypes";

// ====================================================
// GraphQL query operation: userListQuery
// ====================================================

export interface userListQuery_user_list_error {
  __typename: "InternalErrorProblem" | "UnknowErrorProblem" | "UnauthorizedErrorProblem" | "ValidationErrorProblem" | "ForbiddenErrorProblem";
  message: string;
}

export interface userListQuery_user_list_pagination {
  __typename: "PaginationOutput";
  totalItems: number;
  totalPages: number;
  page: number;
  itemsPerPage: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export interface userListQuery_user_list_record {
  __typename: "User";
  id: any;
  email: string;
  fullName: string;
  createdAt: any;
}

export interface userListQuery_user_list {
  __typename: "UserListOutput";
  ok: boolean;
  error: userListQuery_user_list_error[] | null;
  pagination: userListQuery_user_list_pagination | null;
  record: userListQuery_user_list_record[] | null;
}

export interface userListQuery_user {
  __typename: "UserQuery";
  id: string;
  list: userListQuery_user_list;
}

export interface userListQuery {
  user: userListQuery_user;
}

export interface userListQueryVariables {
  input: UserListInput;
}
