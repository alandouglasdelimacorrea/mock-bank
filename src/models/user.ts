import { IUser } from "../interfaces/IUser";

export default class User {
   private user: IUser;

   constructor(user: IUser){
      this.user = user;
   }
}