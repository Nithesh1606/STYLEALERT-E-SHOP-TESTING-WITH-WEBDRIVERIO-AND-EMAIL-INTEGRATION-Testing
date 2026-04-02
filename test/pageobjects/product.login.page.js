const LoginPage = require("./login.page");

class ProductPage extends LoginPage {

    constructor(browser) {
        super(browser)
    }

    get productOn() {
        return $("//div[@class='nav-inner']//a[text()='Products']");
    }

    get catList() {
        return $('//div[@class="single-widget category"]/ul[@class="categor-list"]/li/a[text()="Men\'s Fashion"]');
    }

    get modelView() {
        return $('//div[@class="single-product"]/div[@class="product-img"]/a[@href="http://127.0.0.1:8000/product-detail/melange-casual-black"]');
    }

    get modelName() {
        return $('//div[@class="product-des"]//h4[text()="Melange Casual Black"]');
    }


    get cartBtn() {
        return $('//div[@class="add-to-cart mt-4"]/button[text()="Add to cart"]');
    }


    async productModel() {
        await this.productOn.click();
        await this.catList.click();

    }

    async scrollToModelView() {
        await this.modelView.scrollIntoView();
        await this.modelView.waitForDisplayed(5);
        await this.modelView.click();
    }

    async modelTitleName() {
        await this.modelName.waitForDisplayed(5);
        const modelNameText = await this.modelName.getText();
        return modelNameText === 'Melange Casual Black';

    }

    async addCart() {
        await this.cartBtn.waitForClickable(5)
        await this.cartBtn.click();
    }

}

module.exports = ProductPage;
