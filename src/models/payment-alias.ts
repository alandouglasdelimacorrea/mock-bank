export default class PaymentAlias {
   private type: 'cpf' | 'phone' | 'random' | 'cnpj';
   private key: string;

   constructor(type: 'cpf' | 'phone' | 'random' | 'cnpj', key: string){
      this.type = type;
      this.key = key;
   }
}