const OpenCart = require("./addtocart.page");

class PaymentPage extends OpenCart {

    constructor(browser) {
        super(browser)
    }

    get userFirstName() {
        return $('//input[@name="first_name"]');
    }

    get userLastName() {
        return $('//input[@name="last_name"]');
    }

    get userEmail() {
        return $('//input[@name="email"]');
    }

    get userPhoneNum() {
        return $('//input[@name="phone"]');
    }

    get countryClickOn() {
        return $('//div[contains(@class,"nice-select")]');
    }

    get dropdownTextBlock() {
        return $('//div[@class="form-group"]//div[contains(@class, "nice-select")]//span[@class="current"]');
    }
    get optionIndia() {
        return $('//div[@class="form-group"]//li[@data-value="IN"]');
    }
    get selectedOption() {
        return $('//div[@class="form-group"]//div[contains(@class, "nice-select")]//span[@class="current"]');
    }

    get firstAddress() {
        return $('//input[@name="address1"]');
    }

    get secondAddress() {
        return $('//input[@name="address2"]');
    }

    get portalNum() {
        return $('//input[@name="post_code"]');
    }

    get codPay() {
        return $('//input[@name="payment_method" and @value="cod"]');
    }

    get proceedBtn() {
        return $('//button[text()="proceed to checkout"]');
    }

    async payDetails(firstName, lastName, email, phoneNumber, userFirstAddress, userSecondAddress, portalNumber){
        await this.userFirstName.setValue(firstName);
        await this.userLastName.setValue(lastName);
        await this.userEmail.setValue(email);
        await this.userPhoneNum.setValue(phoneNumber);
        await this.firstAddress.setValue(userFirstAddress);
        await this.secondAddress.setValue(userSecondAddress);
        await this.portalNum.setValue(portalNumber);
    }

    async dropdown() {
        await this.countryClickOn.waitForClickable(5);
       await this.countryClickOn.click();
    }

    async selectIndia() {
        await this.optionIndia.waitForClickable(5);
        await this.optionIndia.click();
    }

    async selectedCountry() {
        await this.selectedOption.waitForClickable(5);
        return await this.selectedOption.getText();
    }

    async cashOnDelivery() {
        await this.codPay.click();
    }

    async proceed() {
        await this.proceedBtn.click();
    }
    
}

module.exports = PaymentPage;