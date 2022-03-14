import Selectors from "./Login.selectors";
class LoginActions {
  constructor(page) {
    this.page = page;
  }

  async login(name, password) {
    await this.page.waitForSelector(Selectors.inputLogin, 5000);
    await this.page.fill(Selectors.inputLogin, name);
    await this.page.fill(Selectors.inputPassword, password);

    await this.page.click(Selectors.buttonLogin);
  }
}

export default LoginActions;
