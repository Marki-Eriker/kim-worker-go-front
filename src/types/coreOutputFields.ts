/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: coreOutputFields
// ====================================================

export interface coreOutputFields_error {
  __typename: "ValidationErrorProblem" | "ForbiddenErrorProblem" | "UnknowErrorProblem" | "InternalErrorProblem" | "UnauthorizedErrorProblem";
  message: string;
}

export interface coreOutputFields {
  __typename: "BankAccountGetOutput" | "PersonFindOutput" | "UserUpdatePasswordOutput" | "PaymentConfirmationApproveOutput" | "ContractorGetOutput" | "NavigationFindOutput" | "UserMeOutput" | "PaymentConfirmationFindOutput" | "UserUpdateMeOutput" | "UserFindOutput" | "PaymentInvoiceCreateOutput" | "ContractFindOutput" | "UnauthorizedOutput" | "UserCreateOutput" | "UserLogoutOutput" | "RequestInfoOutput" | "AccessFindOutput" | "RequestUpdateStatusOutput" | "ForbiddenErrorOutput" | "ContractCreateOutput" | "InternalErrorOutput" | "FileCreateOutput" | "ServiceTypeGetOutput" | "UserLoginOutput" | "PaymentInvoiceFindOutput" | "RequestListOutput" | "UserRefreshOutput" | "SignatoryGetOutput" | "ShipGetOutput" | "UserDeleteOutput" | "UserGrantRequestAccessOutput" | "UserListOutput" | "OrganizationContactGetOutput" | "PaymentConfirmationCreateOutput" | "ContactListOutput" | "EmailSendOutput" | "UserUpdateMainOutput";
  ok: boolean;
  error: coreOutputFields_error[] | null;
}
