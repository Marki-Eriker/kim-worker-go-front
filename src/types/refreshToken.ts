/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: refreshToken
// ====================================================

export interface refreshToken_user_refresh_error {
  __typename: "ValidationErrorProblem" | "UnknowErrorProblem" | "InternalErrorProblem" | "UnauthorizedErrorProblem" | "ForbiddenErrorProblem";
  message: string;
}

export interface refreshToken_user_refresh {
  __typename: "UserRefreshOutput";
  ok: boolean;
  accessToken: string | null;
  error: refreshToken_user_refresh_error[] | null;
}

export interface refreshToken_user {
  __typename: "UserQuery";
  id: string;
  refresh: refreshToken_user_refresh;
}

export interface refreshToken {
  user: refreshToken_user;
}
