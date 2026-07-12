import { test, expect } from './fixtures';

test.describe('Products Catalogue Tests', () => {
    test ('Should search for product successfully', async ({ productsPage }) => {
        await productsPage.navigate();

        await productsPage.searchProduct('t-shirt');

        await expect(productsPage.title).toBeVisible();
    })
});