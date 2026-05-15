import { TransactionType } from "../enums/transaction-type.enum";
import { IRegistry } from "../interfaces/IRegistry";
import Utils from "../shared/utils";
import Registry from "./registry";

export default class Transaction {

   private id: string;
   private date: Date;
   private description: string;
   private registries: Registry[] = [];
   
   constructor(date: Date, description: string){
      this.id = Utils.generateId();
      this.date = new Date();
      this.description = description;
   }

   public addRegistry(accountId: string, value: number, type: TransactionType){
      const registryI: IRegistry = {
         id: Utils.generateId(),
         accountId,
         transactionId: this.id,
         type,
         value
      }
      const registry: Registry = new Registry(registryI);
      this.registries.push(registry); 
   }

   public getId(): string {
      return this.id
   }

   public getRegistries(): Registry[] {
      return this.registries
   }
}
