import { TransactionType } from "../enums/transaction-type.enum";

export interface IRegistry {
    id: string
    accountId: string
    value: number
    transactionId: string 
    type: TransactionType;
}