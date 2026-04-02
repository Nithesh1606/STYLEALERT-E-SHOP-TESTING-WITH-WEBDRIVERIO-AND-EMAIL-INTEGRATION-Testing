const ProductPage = require("../pageobjects/product.login.page");

const product = new ProductPage();
describe('Validate the User product view', () => {
    it('Verify the user can view the product successfully.', async () => {
        await product.open();
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
});