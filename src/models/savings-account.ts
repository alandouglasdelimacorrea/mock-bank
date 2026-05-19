import Account from "./account";
import PaymentAlias from "./payment-alias";
import User from "./user";

export default class SavingsAccount extends Account {
   private interestRate: number = 0.1;
   
   super(user: User){};
   
   public getId(): string{
      return this.getId();
   }

   public getBalance(): number {
      return this.balance
   }

   public debit(amountInCents: number): void {
      if (amountInCents <= 0) {
         throw new Error("Debite um numero maior que zero.");
      }
      if (this.balance < amountInCents) {
         throw new Error("Saldo insuficiente");
      }
      this.balance -= amountInCents;
   }

   public credit(amountInCents: number): void {
      if (amountInCents <= 0) {
         throw new Error("Crédito deve ser maior que zero");
      }
      this.balance += amountInCents;
   }

   public addPaymentAlias(alias: PaymentAlias): void {
      this.paymentAlias.push(alias);
   }


   // public applyInterestOverTime(months: number): void{
   //    const amount = this.getBalance()
   //    const amountWithInterest = amount * Math.pow(1 + this.interestRate, months);
   //    this.deposit(amountWithInterest);
   // }
}