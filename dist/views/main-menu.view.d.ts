import AppController from "../controllers/app.controller";
import { ViewState } from "../interfaces/view-state.interface";
export declare class MainMenuView implements ViewState {
    execute(context: AppController): Promise<ViewState | null>;
    private pause;
    private transfer;
    private viewBalance;
}
//# sourceMappingURL=main-menu.view.d.ts.map