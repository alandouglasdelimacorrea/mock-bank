import AppContext from "../models/app-context";

export interface Router {
  execute(context: AppContext): Promise<Router | null>;
}