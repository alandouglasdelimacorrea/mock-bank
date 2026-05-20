import { Router } from "../interfaces/view-state.interface";
import AppContext from "../models/app-context";

export default class LoginView  {
    execute(context: AppContext): Promise<Router | null> {
        throw new Error("Method not implemented.");
    }
}