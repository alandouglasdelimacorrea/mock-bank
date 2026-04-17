import Account from "./models/account";

export default class Database {
   private accounts: Account[] = [];
   
   public addAccount(account: Account): void{
      this.accounts.push(account);
   }
}