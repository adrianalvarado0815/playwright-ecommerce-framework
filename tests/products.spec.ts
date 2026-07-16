import { test, expect } from './fixtures';

test.describe('Products & Cart Flow Tests', () => {
    test ('Should search for product successfully', async ({ productsPage, cartPage }) => {
        const productToSearch = 'Blue Top';

        await productsPage.navigate();

        await productsPage.searchProduct(productToSearch);
        await productsPage.addFirstPRoductToCart();
        await expect(cartPage.firstProductLocator).toHaveText(productToSearch);

        //await expect(productsPage.title).toBeVisible();
    })
});