/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UserUpdateMainInput, BaseRole } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: updateUserMainMutation
// ====================================================

export interface updateUserMainMutation_user_updateMain_error {
  __typename: "ValidationErrorProblem" | "UnknowErrorProblem" | "InternalErrorProblem" | "UnauthorizedErrorProblem" | "ForbiddenErrorProblem";
  message: string;
}

export interface updateUserMainMutation_user_updateMain_record {
  __typename: "User";
  id: any;
  fullName: string;
  email: string;
  baseRole: BaseRole;
}

export interface updateUserMainMutation_user_updateMain {
  __typename: "UserUpdateMainOutput";
  ok: boolean;
  error: updateUserMainMutation_user_updateMain_error[] | null;
  record: updateUserMainMutation_user_updateMain_record | null;
}

export interface updateUserMainMutation_user {
  __typename: "UserMutation";
  updateMain: updateUserMainMutation_user_updateMain;
}

export interface updateUserMainMutation {
  user: updateUserMainMutation_user;
}

export interface updateUserMainMutationVariables {
  input: UserUpdateMainInput;
}
