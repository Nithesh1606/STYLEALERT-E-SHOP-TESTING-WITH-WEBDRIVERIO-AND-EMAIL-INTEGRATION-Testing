const ProductPage = require("./product.login.page");
const assert = require('assert');
const LoginPage = require("./login.page");

class OpenCart extends ProductPage {

    constructor(browser) {
        super(browser)
    }

    get cartView() {
        return $('//div[@class="sinlge-bar shopping"]/a[@href="http://127.0.0.1:8000/cart"]');
    }

    get cartImg() {
        return $('//td[@class="image" and @data-title="No"]/img');
    }
    get productName() {
        return $('//td[@class="product-des"]//a[text()="Melange Casual Black"]')
    }

    get productPrice() {
        return $('//td[@class="price" and @data-title="Price"]/span[text()="$540.00"]');
    }

    get totalPrice() {
        return $('//td[@class="total-amount cart_single_price" and @data-title="Total"]/span[@class="money"]');
    }

    get checkoutBtn() {
        return $('//div[@class="button5"]/a[@href="http://127.0.0.1:8000/checkout" and @class="btn"]');
    }
    get checkoutBtn() {
        return $('//div[@class="button5"]/a[@href="http://127.0.0.1:8000/checkout" and @class="btn"]');
    }


    get deleteItem() {
        return $('//td[@class="action"]/a');
    }


    //this code is cartPage  
    async userCart() {
        await this.cartView.click();
    }

    // Generic function to check if an element exists and assert its existence
    async assertElementExists(xpath) {
        try {
            // Locate the element using the provided XPath
            const element = await xpath;

            // Check if the element exists
            const exists = await element.isExisting();

            // Assert that the element exists
            assert.strictEqual(exists, true, `Expected element with XPath to exist`);
        } catch (error) {
            // Log or handle the error as needed
            console.error(`Error while asserting element existence: ${error.message}`);
            throw error; // Rethrow the error to fail the test
        }
    }


    async orderPlaced() {
        await this.checkoutBtn.click();
    }


    async deleteProduct() {
        await this.deleteItem.waitForDisplayed(5);
        await this.deleteItem.click();
    }
}
module.exports = OpenCart;