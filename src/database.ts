import Account from "./models/account";
import Ledger from "./models/ledger";

export default class Database {
   private accounts: Map<string, Account> = new Map();
   private ledger: Map<string, Ledger> = new Map();

   public saveAccount(account: Account): void {
      this.accounts.set(account.getId(), account);
   }

   public getAccount(id: string): Account | undefined{
      return this.accounts.get(id);
   }

   public getAccounts(): Account[] | undefined{
      return Array.from(this.accounts.values())
   }

   public saveLedger(ledger: Ledger): void{
      this.ledger.set(ledger.getId(), ledger);
   }

   public getAllTransactions(): Ledger[]{
      return Array.from(this.ledger.values());
   }

}