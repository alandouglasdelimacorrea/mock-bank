import AppController from "../controllers/app.controller";

export interface ViewState {
  execute(context: AppController): Promise<ViewState | null>;
}