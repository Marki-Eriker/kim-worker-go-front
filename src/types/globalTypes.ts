/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum BaseRole {
  ADMIN = "ADMIN",
  ANY = "ANY",
  HEAD = "HEAD",
  WORKER = "WORKER",
}

export enum ContractMediumType {
  electronic = "electronic",
  paper = "paper",
}

export enum ContractorType {
  organization = "organization",
  person = "person",
}

export enum OrderBy {
  ASC = "ASC",
  DESC = "DESC",
}

export enum PaymentFilter {
  ALL = "ALL",
  NOT_PAID = "NOT_PAID",
  NOT_VERIFIED = "NOT_VERIFIED",
}

export enum RequestStatus {
  accepted = "accepted",
  completed = "completed",
  pending = "pending",
  rejected = "rejected",
  signed = "signed",
}

export interface ContractCreateInput {
  contractNumber: string;
  fileId: any;
  requestId: any;
  contractorId: any;
}

export interface ContractFindInput {
  contractID: any;
}

export interface ContractListInput {
  serviceTypeID?: any | null;
  filter: PaginationInput;
  paymentFilter?: PaymentFilter | null;
}

export interface EmailSendInput {
  address: string;
  message: string;
}

export interface FileCreateInput {
  fileName: string;
  extension: string;
  mimeType: string;
  size: any;
  checksum: string;
}

export interface PaginationInput {
  page?: number | null;
  pageSize?: number | null;
  orderField?: string | null;
  orderBy?: OrderBy | null;
}

export interface PaymentConfirmationApproveInput {
  confirmationID: any;
}

export interface PaymentInvoiceCreateInput {
  contractID: any;
  fileID: any;
}

export interface RequestInfoInput {
  requestID: any;
}

export interface RequestListInput {
  serviceID?: any | null;
  status?: RequestStatus | null;
  filter: PaginationInput;
}

export interface RequestUpdateStatusInput {
  requestID: any;
  newStatus: RequestStatus;
}

export interface UserFindInput {
  userID: any;
}

export interface UserGrantRequestAccessInput {
  userID: any;
  serviceTypes: any[];
}

export interface UserListInput {
  filter: PaginationInput;
}

export interface UserLoginInput {
  email: string;
  password: string;
}

export interface UserUpdateMainInput {
  fullName?: string | null;
  email?: string | null;
  baseRole?: BaseRole | null;
  userID: any;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
