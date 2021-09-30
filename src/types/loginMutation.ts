/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UserLoginInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: loginMutation
// ====================================================

export interface loginMutation_user_login_error {
  __typename: "InternalErrorProblem" | "UnauthorizedErrorProblem" | "UnknowErrorProblem" | "ForbiddenErrorProblem" | "ValidationErrorProblem";
  message: string;
}

export interface loginMutation_user_login {
  __typename: "UserLoginOutput";
  ok: boolean;
  accessToken: string | null;
  error: loginMutation_user_login_error[] | null;
}

export interface loginMutation_user {
  __typename: "UserMutation";
  login: loginMutation_user_login;
}

export interface loginMutation {
  user: loginMutation_user;
}

export interface loginMutationVariables {
  input: UserLoginInput;
}
