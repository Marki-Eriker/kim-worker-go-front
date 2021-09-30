/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { RequestUpdateStatusInput, RequestStatus } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: updateRequestStatusMutation
// ====================================================

export interface updateRequestStatusMutation_request_updateStatus_error {
  __typename: "InternalErrorProblem" | "UnauthorizedErrorProblem" | "UnknowErrorProblem" | "ForbiddenErrorProblem" | "ValidationErrorProblem";
  message: string;
}

export interface updateRequestStatusMutation_request_updateStatus_record {
  __typename: "Request";
  id: any;
  status: RequestStatus;
}

export interface updateRequestStatusMutation_request_updateStatus {
  __typename: "RequestUpdateStatusOutput";
  ok: boolean;
  error: updateRequestStatusMutation_request_updateStatus_error[] | null;
  record: updateRequestStatusMutation_request_updateStatus_record | null;
}

export interface updateRequestStatusMutation_request {
  __typename: "RequestMutation";
  updateStatus: updateRequestStatusMutation_request_updateStatus;
}

export interface updateRequestStatusMutation {
  request: updateRequestStatusMutation_request;
}

export interface updateRequestStatusMutationVariables {
  input: RequestUpdateStatusInput;
}
