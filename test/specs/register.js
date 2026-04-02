const SearchHeader = require("../model/search");
const loginPage = require("../pageobjects/login.page");
const RegisterPage = require("../pageobjects/register.page");

const registerPage = new RegisterPage();
//const searchHeader = new SearchHeader();

describe('Validate the User Registration', () => {
    it('Verify the user can register successfully.', async() => {
        await registerPage.open();
        await registerPage.delayInSec(3);
        await registerPage.registerForm("Nithesh", "Nithesh@gmail.com", "Nithi123", "Nithi123");
        await registerPage.delayInSec(3);
    });
});