export default class User {
   private name: string;
   private email: string;
   private cpf: string;
   private password: string;

   constructor(name: string, email: string, cpf: string, password: string){
      this.name = name;
      this.email = email;
      this.cpf = cpf;
      this.password = password;
   }
}