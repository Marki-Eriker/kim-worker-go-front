/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: coreOutputFields
// ====================================================

export interface coreOutputFields_error {
  __typename: "InternalErrorProblem" | "UnknowErrorProblem" | "UnauthorizedErrorProblem" | "ValidationErrorProblem" | "ForbiddenErrorProblem";
  message: string;
}

export interface coreOutputFields {
  __typename: "RequestListOutput" | "AccessFindOutput" | "ContractFindOutput" | "UserListOutput" | "OrganizationContactGetOutput" | "ShipGetOutput" | "UserGrantRequestAccessOutput" | "UserUpdateMainOutput" | "NavigationFindOutput" | "RequestInfoOutput" | "UserUpdateMeOutput" | "UserCreateOutput" | "UserLogoutOutput" | "ContactListOutput" | "UnauthorizedOutput" | "PaymentConfirmationFindOutput" | "RequestUpdateStatusOutput" | "UserRefreshOutput" | "ContractCreateOutput" | "UserFindOutput" | "PaymentInvoiceFindOutput" | "UserDeleteOutput" | "FileCreateOutput" | "ForbiddenErrorOutput" | "UserUpdatePasswordOutput" | "InternalErrorOutput" | "PaymentInvoiceCreateOutput" | "ServiceTypeGetOutput" | "UserMeOutput" | "PersonFindOutput" | "ContractorGetOutput" | "PaymentConfirmationApproveOutput" | "PaymentConfirmationCreateOutput" | "SignatoryGetOutput" | "BankAccountGetOutput" | "UserLoginOutput";
  ok: boolean;
  error: coreOutputFields_error[] | null;
}
