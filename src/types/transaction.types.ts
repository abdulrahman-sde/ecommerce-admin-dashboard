import type { PaginatedApiResponse } from "./shared.types";

export type PaymentMethod = "CREDIT_CARD" | "PAYPAL" | "CASH" | "BANK_TRANSFER";
export type TransactionStatus = "PENDING" | "COMPLETED" | "FAILED" | "REFUNDED";

export interface TransactionCustomer {
  firstName: string;
  lastName: string;
  email: string;
}

export interface TransactionOrder {
  orderNumber: string;
  totalAmount: number;
  id?: string;
}

export interface Transaction {
  id: string;
  transactionNumber: string;
  orderId: string;
  customerId: string;
  amount: number;
  currency: string;
  paymentStatus: TransactionStatus;
  paymentMethod: PaymentMethod;
  paymentGateway: string;
  createdAt: string;
  updatedAt: string;
  customer: TransactionCustomer;
  order: TransactionOrder;
}

// For list view
export type TransactionListItem = Transaction;

export type GetAllTransactionsResponse = PaginatedApiResponse<
  TransactionListItem[]
>;

export interface GetTransactionResponse {
  success: boolean;
  timestamp: string;
  message: string;
  data: Transaction;
}

export interface TransactionsQuery {
  page?: number;
  limit?: number;
  search?: string;
  paymentStatus?: TransactionStatus;
  paymentMethod?: PaymentMethod;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
}
