/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PaymentConfirmationApproveInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: appriveConfirmationMutation
// ====================================================

export interface appriveConfirmationMutation_payment_approveConfirmation_error {
  __typename: "InternalErrorProblem" | "UnauthorizedErrorProblem" | "UnknowErrorProblem" | "ForbiddenErrorProblem" | "ValidationErrorProblem";
  message: string;
}

export interface appriveConfirmationMutation_payment_approveConfirmation_record {
  __typename: "PaymentConfirmation";
  id: any;
  proven: boolean;
}

export interface appriveConfirmationMutation_payment_approveConfirmation {
  __typename: "PaymentConfirmationApproveOutput";
  ok: boolean;
  error: appriveConfirmationMutation_payment_approveConfirmation_error[] | null;
  record: appriveConfirmationMutation_payment_approveConfirmation_record | null;
}

export interface appriveConfirmationMutation_payment {
  __typename: "PaymentMutation";
  approveConfirmation: appriveConfirmationMutation_payment_approveConfirmation;
}

export interface appriveConfirmationMutation {
  payment: appriveConfirmationMutation_payment;
}

export interface appriveConfirmationMutationVariables {
  input: PaymentConfirmationApproveInput;
}
