import Account from "./account"

export default class Transaction {
   private amount: number;
   private date: number;
   private description: string;
   private fromAccount: Account;
   private toAccount: Account | null;
   private type: 'deposit' | 'withdraw' | 'transfer'; //depois transformo em um enum
   
   constructor(amount: number, description: string, fromAccount: Account, toAccount: Account | null, type: 'deposit' | 'withdraw' | 'transfer'){
      this.amount = amount;
      this.description = description;
      this.fromAccount = fromAccount;
      this.toAccount = toAccount;
      this.type = type;
      this.date = new Date().getDate();
   }
}
