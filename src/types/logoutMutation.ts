/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: logoutMutation
// ====================================================

export interface logoutMutation_user_logout_error {
  __typename: "ValidationErrorProblem" | "ForbiddenErrorProblem" | "UnknowErrorProblem" | "InternalErrorProblem" | "UnauthorizedErrorProblem";
  message: string;
}

export interface logoutMutation_user_logout {
  __typename: "UserLogoutOutput";
  ok: boolean;
  error: logoutMutation_user_logout_error[] | null;
}

export interface logoutMutation_user {
  __typename: "UserMutation";
  logout: logoutMutation_user_logout;
}

export interface logoutMutation {
  user: logoutMutation_user;
}
