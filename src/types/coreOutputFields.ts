/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: coreOutputFields
// ====================================================

export interface coreOutputFields_error {
  __typename: "InternalErrorProblem" | "UnauthorizedErrorProblem" | "UnknowErrorProblem" | "ForbiddenErrorProblem" | "ValidationErrorProblem";
  message: string;
}

export interface coreOutputFields {
  __typename: "UserUpdateMeOutput" | "ContractFindOutput" | "SignatoryGetOutput" | "EmailSendOutput" | "UserListOutput" | "UserFindOutput" | "FileCreateOutput" | "PersonFindOutput" | "UserUpdatePasswordOutput" | "UserRefreshOutput" | "PaymentInvoiceFindOutput" | "PaymentConfirmationFindOutput" | "UserMeOutput" | "UserCreateOutput" | "UserGrantRequestAccessOutput" | "UserUpdateMainOutput" | "BankAccountGetOutput" | "ContactListOutput" | "InternalErrorOutput" | "ContractorGetOutput" | "OrganizationContactGetOutput" | "AccessFindOutput" | "ContractCreateOutput" | "ServiceTypeGetOutput" | "NavigationFindOutput" | "PaymentConfirmationCreateOutput" | "RequestInfoOutput" | "UserDeleteOutput" | "RequestUpdateStatusOutput" | "UserLoginOutput" | "UserLogoutOutput" | "PaymentInvoiceCreateOutput" | "PaymentConfirmationApproveOutput" | "ShipGetOutput" | "UnauthorizedOutput" | "ForbiddenErrorOutput" | "RequestListOutput";
  ok: boolean;
  error: coreOutputFields_error[] | null;
}
