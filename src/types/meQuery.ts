/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { BaseRole } from "./globalTypes";

// ====================================================
// GraphQL query operation: meQuery
// ====================================================

export interface meQuery_user_me_error {
  __typename: "InternalErrorProblem" | "UnknowErrorProblem" | "UnauthorizedErrorProblem" | "ValidationErrorProblem" | "ForbiddenErrorProblem";
  message: string;
}

export interface meQuery_user_me_record_navigation_error {
  __typename: "InternalErrorProblem" | "UnknowErrorProblem" | "UnauthorizedErrorProblem" | "ValidationErrorProblem" | "ForbiddenErrorProblem";
  message: string;
}

export interface meQuery_user_me_record_navigation_record {
  __typename: "Navigation";
  id: any;
  path: string;
  title: string;
  description: string | null;
  icon: string | null;
  parentId: any;
  node: boolean;
  order: any;
}

export interface meQuery_user_me_record_navigation {
  __typename: "NavigationFindOutput";
  ok: boolean;
  error: meQuery_user_me_record_navigation_error[] | null;
  record: meQuery_user_me_record_navigation_record[] | null;
}

export interface meQuery_user_me_record {
  __typename: "User";
  id: any;
  email: string;
  fullName: string;
  baseRole: BaseRole;
  serviceTypes: any[];
  navigation: meQuery_user_me_record_navigation;
}

export interface meQuery_user_me {
  __typename: "UserMeOutput";
  ok: boolean;
  error: meQuery_user_me_error[] | null;
  record: meQuery_user_me_record | null;
}

export interface meQuery_user {
  __typename: "UserQuery";
  id: string;
  me: meQuery_user_me;
}

export interface meQuery {
  user: meQuery_user;
}
