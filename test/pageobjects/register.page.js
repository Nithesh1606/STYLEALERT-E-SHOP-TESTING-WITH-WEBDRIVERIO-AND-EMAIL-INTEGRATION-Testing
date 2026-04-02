const Page = require("./page");

class RegisterPage extends Page {

    constructor(browser) {
        super(browser)
    }

    get register() {
        return $('//a[text()="Register"]');
    }

    get inputName() {
        return $('//div[@class="login-form"]//input[@name="name"]');
    }

    get inputEmail() {
        return $('//div[@class="login-form"]//input[@name="email"]');
    }

    get inputPassword() {
        return $('//div[@class="login-form"]//input[@name="password"]');
    }

    get confirmPassword() {
        return $('//div[@class="login-form"]//input[@name="password_confirmation"]');
    }

    get submitBtn() {
        return $('//div[@class="form-group login-btn"]//button[@type="submit"]');
    }

    async registerForm(name, email, password, confirmPassword) {
        await this.register.click();
        await this.inputName.setValue(name);
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.confirmPassword.setValue(confirmPassword);
        await this.submitBtn.click();
    }

}

module.exports = RegisterPage;