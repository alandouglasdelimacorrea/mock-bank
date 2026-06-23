import AppController from "./controllers/app.controller";
import LoginController from "./controllers/login.controller";
import Database from "./database";
import AppContext from "./models/app-context";
import LoginView from "./views/login.view";

function bootstrap() {

    const loginView = new LoginView()
    const app = new AppController(loginView)
    app.start()
}

bootstrap()