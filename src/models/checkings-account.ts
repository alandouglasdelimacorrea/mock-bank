import Account from "./account";

export default class CheckingsAccount extends Account {
   private overdraftLimit: number = 100;
   
   //fazer lógica de poder sacar usando o overdraftlimit

   private updateOverdraftLimit(amount: number): void{
      this.overdraftLimit -= amount;
   }

   override withdraw(amount: number): void {
      if(this.overdraftLimit < amount) return;
      
      this.balance -= amount;
      this.updateOverdraftLimit(amount);
   }
}