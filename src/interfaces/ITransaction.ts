import { TransactionType } from "../enums/transaction-type.enum";
import Account from "../models/account";

export interface ITransaction {
    amount: number;
    date: number;
    description: string;
    fromAccount: Account;
    toAccount: Account | null;
    type: TransactionType;
}