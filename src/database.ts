import Account from "./models/account";
import Transaction from "./models/transaction";

export default class Database {
   private accounts: Map<string, Account> = new Map();
   private transactions: Map<string, Transaction> = new Map();

   public saveAccount(account: Account): void {
      this.accounts.set(account.getId(), account);
   }

   public getAccount(id: string): Account | undefined{
      return this.accounts.get(id);
   }

   public saveTransaction(transaction: Transaction): void{
      this.transactions.set(transaction.getId(), transaction);
   }

   public getAllTransactions(): Transaction[]{
      return Array.from(this.transactions.values());
   }

}