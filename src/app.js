import AppLogin from "./appLogin";
//import AppGame from "./appGame";

class App {
    constructor() {
        // this.game = new AppGame();
        this.login = new AppLogin(this.game);

    }

}
new App();