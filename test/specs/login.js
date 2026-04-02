const LoginPage = require("../pageobjects/login.page");

const loginPage = new LoginPage();

describe('User Login', () => {
    it('Verify user can log in with valid email and password.', async () => {
        await loginPage.open();
        await loginPage.delayInSec(3);
        await loginPage.login("Nithesh@gmail.com", "Nithi123");
        await loginPage.delayInSec(3);
    });
});