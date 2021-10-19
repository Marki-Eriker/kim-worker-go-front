/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { FileCreateInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: createFileMutation
// ====================================================

export interface createFileMutation_file_create_error {
  __typename: "ValidationErrorProblem" | "ForbiddenErrorProblem" | "UnknowErrorProblem" | "InternalErrorProblem" | "UnauthorizedErrorProblem";
  message: string;
}

export interface createFileMutation_file_create_record {
  __typename: "File";
  id: any;
}

export interface createFileMutation_file_create {
  __typename: "FileCreateOutput";
  ok: boolean;
  error: createFileMutation_file_create_error[] | null;
  record: createFileMutation_file_create_record | null;
}

export interface createFileMutation_file {
  __typename: "FileMutation";
  create: createFileMutation_file_create;
}

export interface createFileMutation {
  file: createFileMutation_file;
}

export interface createFileMutationVariables {
  input: FileCreateInput;
}
