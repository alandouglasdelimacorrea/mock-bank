import AppController from "../controllers/app.controller";
import { ViewState } from "../interfaces/view-state.interface";
export default class LoginView implements ViewState {
    execute(context: AppController): Promise<ViewState | null>;
    login(context: AppController): Promise<ViewState>;
    signin(context: AppController): Promise<ViewState>;
}
//# sourceMappingURL=login.view.d.ts.map