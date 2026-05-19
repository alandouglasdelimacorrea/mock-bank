import Utils from "../shared/utils";
import PaymentAlias from "./payment-alias";
import User from "./user";

export default class Account {
   private id: string;
   protected balance: number;
   private user: User;
   private paymentAlias: PaymentAlias[] = [];

   constructor(user: User){
      this.id = Utils.generateId();
      this.balance = 0;
      this.user = user;
   }

   public getId(): string{
      return this.id
   }

   public getBalance(): number {
      return this.balance
   }

   public debit(amountInCents: number): void {
        if (amountInCents <= 0) {
            throw new Error("Debitar numero maior que zero.");
        }
        if (this.balance < amountInCents) {
            throw new Error("Fundos insuficientes");
        }
        this.balance -= amountInCents;
    }

    public credit(amountInCents: number): void {
        if (amountInCents <= 0) {
            throw new Error("Crédito deve ser maior que zero");
        }
        this.balance += amountInCents;
    }

   // public addPaymentAlias(alias: PaymentAlias): void {
   //    this.paymentAlias.push(alias);
   // }
}