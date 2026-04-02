const { $ } = require('@wdio/globals')
const RegisterPage = require('./register.page');

class LoginPage extends RegisterPage {

    constructor(browser) {
        super(browser)
    }

    get userLogin() {
        return $('//a[text()="Login /"]');
    }

    get inputUsername() {
        return $('//input[@name="email"]');
    }

    get inputPassword() {
        return $('//input[@name="password"]');
    }

    get btnSubmit() {
        return $('//button[text()="Login"]');
    }

    async login(username, password) {
        await this.userLogin.click();
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }
}

module.exports = LoginPage;
