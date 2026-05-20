import { IUser } from "../interfaces/user.interface";

export default class User {
   private user: IUser;

   constructor(user: IUser){
      this.user = user;
   }
}