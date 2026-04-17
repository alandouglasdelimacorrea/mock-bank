import { AccountType } from "../enums/account-type.enum";

export default class PaymentAlias {
   private type: AccountType;
   private key: string;

   constructor(type: AccountType, key: string){
      this.type = type;
      this.key = key;
   }
}