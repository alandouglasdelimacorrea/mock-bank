import PaymentAlias from "./payment-alias";
import User from "./user";

export default class Account {
   private accountNumber: string;
   protected balance: number;
   private user: User;
   private paymentAlias: PaymentAlias[] = [];

   constructor(user: User){
      this.accountNumber = this.generateAccountNumber();
      this.balance = 0;
      this.user = user;
   }

   public deposit(amount: number): void {
      this.balance += amount;
   }

   public addPaymentAlias(alias: PaymentAlias): void {
      this.paymentAlias.push(alias);
   }

   private generateAccountNumber(): string {
      return Math.random().toString(36).substring(2, 11);
   }

   public getBalance(): number {
      return this.balance;
   }

   public withdraw(amount: number): void {
      this.balance -= amount;
   }

   

}