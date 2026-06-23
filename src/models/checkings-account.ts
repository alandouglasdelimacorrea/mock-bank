import Account from "./account";
import PaymentAlias from "./payment-alias";
import User from "./user";

export default class CheckingsAccount extends Account {
   private overdraftLimit: number = 100;
   

   super(user: User){};

   //fazer lógica de poder sacar usando o overdraftlimit

   // private updateOverdraftLimit(amount: number): void{
   //    this.overdraftLimit -= amount;
   // }

   public getId(): string{
      return this.id;
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

   public getAccountDetails(): string {
      return `Conta Corrente - ID: ${this.id}, Saldo: ${this.balance}, Limite de Cheque Especial: ${this.overdraftLimit}, Nome: ${this.user.getName()}, Email: ${this.user.getEmail()}`;
   }
}