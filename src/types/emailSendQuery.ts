/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { EmailSendInput } from "./globalTypes";

// ====================================================
// GraphQL query operation: emailSendQuery
// ====================================================

export interface emailSendQuery_email_send_error {
  __typename: "ValidationErrorProblem" | "ForbiddenErrorProblem" | "UnknowErrorProblem" | "InternalErrorProblem" | "UnauthorizedErrorProblem";
  message: string;
}

export interface emailSendQuery_email_send {
  __typename: "EmailSendOutput";
  ok: boolean;
  error: emailSendQuery_email_send_error[] | null;
}

export interface emailSendQuery_email {
  __typename: "EmailQuery";
  send: emailSendQuery_email_send;
}

export interface emailSendQuery {
  email: emailSendQuery_email;
}

export interface emailSendQueryVariables {
  input: EmailSendInput;
}
