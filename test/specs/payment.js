const PaymentPage = require("../pageobjects/paymant.page");

const payment = new PaymentPage ();

describe('User PaymentDetails', () => {
    it('Verify user can checout in with valid email and password.', async () => {
        await payment.open();
        await payment.payDetails("nithesh", "c", "Nithesh@gmail.com", "9876543210", "Mysore", "Mysore","570019");
        await payment.selectCountryOn();
    });
});