import { TransactionType } from "../enums/transaction-type.enum";
import { ITransaction } from "../interfaces/ITransaction";
import Account from "./account"

export default class Transaction {

   private transaction: ITransaction;
   
   constructor(transaction: ITransaction){
      this.transaction = transaction;
   }
}
