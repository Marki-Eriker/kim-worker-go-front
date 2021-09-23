/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: coreOutputFields
// ====================================================

export interface coreOutputFields_error {
  __typename: "ValidationErrorProblem" | "UnknowErrorProblem" | "InternalErrorProblem" | "UnauthorizedErrorProblem" | "ForbiddenErrorProblem";
  message: string;
}

export interface coreOutputFields {
  __typename: "FileCreateOutput" | "UserFindOutput" | "UserUpdatePasswordOutput" | "UserUpdateMeOutput" | "ServiceTypeGetOutput" | "ContractCreateOutput" | "UserDeleteOutput" | "UserLogoutOutput" | "UserListOutput" | "InternalErrorOutput" | "UnauthorizedOutput" | "ContactListOutput" | "SignatoryGetOutput" | "EmailSendOutput" | "UserMeOutput" | "NavigationFindOutput" | "PaymentInvoiceFindOutput" | "RequestInfoOutput" | "PaymentConfirmationApproveOutput" | "ContractorGetOutput" | "UserUpdateMainOutput" | "ForbiddenErrorOutput" | "RequestUpdateStatusOutput" | "AccessFindOutput" | "PersonFindOutput" | "UserGrantRequestAccessOutput" | "PaymentConfirmationFindOutput" | "ShipGetOutput" | "UserCreateOutput" | "UserRefreshOutput" | "UserLoginOutput" | "PaymentInvoiceCreateOutput" | "ContractFindOutput" | "BankAccountGetOutput" | "OrganizationContactGetOutput" | "PaymentConfirmationCreateOutput" | "RequestListOutput";
  ok: boolean;
  error: coreOutputFields_error[] | null;
}
