const RegisterPage = require("../pageobjects/register.page");
const OpenCart = require("../pageobjects/addtocart.page");
const LoginPage = require("../pageobjects/login.page");
const PaymentPage = require("../pageobjects/paymant.page");
const ProductPage = require("../pageobjects/product.login.page");

const registerPage = new RegisterPage();
const userCart = new OpenCart();
const loginPage = new LoginPage();
const product = new ProductPage();
const payment = new PaymentPage();


describe('Validate the User Registration', () => {
    it('Verify the user can register successfully.', async() => {
        await registerPage.open();
        await registerPage.delayInSec(3);
        await registerPage.registerForm("Nithesh", "Nithesh@gmail.com", "Nithi123", "Nithi123");
        await registerPage.delayInSec(3);
    });
});
//login test case
describe('Validate the User Cart', () => {
    it('Verify user can log in with valid email and password.', async () => {
        await loginPage.open();
        await loginPage.delayInSec(3);
        await loginPage.login("Nithesh@gmail.com", "Nithi123");
        await loginPage.delayInSec(3);
    });

    //product page test cases
    it('Verify the user can view the product successfully.', async () => {
        await product.delayInSec(3);
        await product.productModel();
        await product.delayInSec(3);
        await product.scrollToModelView();
    });

    it('should verify the product model name.', async () => {
        const modelTitleName = await product.modelTitleName();
        expect(modelTitleName).toBe.True;
    });

    it('should click and verify the Addtocart.', async () => {
        await product.addCart();
    });


    //cart page testCase
    it('Verify the user Cart.', async () => {
        await userCart.delayInSec(5);
        await userCart.userCart();
        await userCart.delayInSec(5);
        //await userCart.deleteProduct();
    });

    it('should check if cart view exists', async () => {
        await userCart.assertElementExists(userCart.cartView);
    });

    it('should check if cart image exists', async () => {
        await userCart.assertElementExists(userCart.cartImg);
    });

    it('should check if product name exists', async () => {
        await userCart.assertElementExists(userCart.productName);
    });

    it('should check if product price exists', async () => {
        await userCart.assertElementExists(userCart.productPrice);
    });

    it('should check if total price exists', async () => {
        await userCart.assertElementExists(userCart.totalPrice);
    });

    it('should check if checkout button exists', async () => {
        await userCart.assertElementExists(userCart.checkoutBtn);
    });
 
    it('verify the product checkout.', async () => {
        await userCart.delayInSec(5);
        await userCart.orderPlaced();

    });

//payment details testCase
    it('verify the payment details.', async () => {
        await payment.delayInSec(5);
        await payment.payDetails("nithesh", "c", "nithesh@gmail.com", "9876543210", "mysore", "mysore", "570019"); 
    });

    it('verify the country selecting', async () =>{
        await payment.delayInSec(5)
        await payment.dropdown();
        await payment.delayInSec(5);

        await payment.selectIndia();
        await payment.delayInSec(5);
        await payment.selectedCountry();
    });

    it('verify the Cod radio', async () => {
        await payment.cashOnDelivery();
    });

    it('verify final checkout', async () => {
        await payment.proceed();
    });
});