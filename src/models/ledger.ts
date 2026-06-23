import { TransactionStatus } from "../enums/transaction-status";
import Utils from "../shared/utils";
import Registry from "./transaction";

export default class Ledger {

   private readonly id: string;
   private readonly date: Date;
   private registries: Registry[] = [];
   private status: TransactionStatus;
   
   constructor(){
      this.id = Utils.generateId();
      this.date = new Date();
      this.status = TransactionStatus.PENDING
   }

   public addRegistry(registry: Registry): void{
      if(this.status !== TransactionStatus.PENDING){
         throw new Error("Apenas transações pendentes podem receber novos registros.");
      }

      this.registries.push(registry);
   }

   public getId(): string {
      return this.id;
   }

   public getRegistries(): ReadonlyArray<Registry> {
      return this.registries;
   }

   public isValid(): boolean{
      if (this.registries.length < 2) return false;

      const sum = this.registries.reduce((acc, curr) => acc + curr.getValue(), 0);
      return sum === 0;
   }

   public commit(): void {
      this.status = TransactionStatus.COMMITED;
   }

   public fail(): void {
      this.status = TransactionStatus.FAILED;
   }


}
