import Account from "./account";

export default class SavingsAccount extends Account {
   private interestRate: number = 0.1;
   
   public applyInterestOverTime(months: number): void{
      const amount = this.getBalance()
      const amountWithInterest = amount * Math.pow(1 + this.interestRate, months);
      this.deposit(amountWithInterest);
   }
}