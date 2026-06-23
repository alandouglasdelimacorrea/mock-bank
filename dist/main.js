"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_controller_1 = __importDefault(require("./controllers/app.controller"));
const login_view_1 = __importDefault(require("./views/login.view"));
function bootstrap() {
    const loginView = new login_view_1.default();
    const app = new app_controller_1.default(loginView);
    app.start();
}
bootstrap();
//# sourceMappingURL=main.js.map