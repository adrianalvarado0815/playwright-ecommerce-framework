import { test, expect } from './fixtures'


test.describe('E2E Checkout & Payment flow', () => {
    test('Should buy a product and complete the payment successfully', async ({
        loginPage,
        productsPage,
        cartPage,
        paymentPage
    }) => {
        const productToSearch = 'Blue Top';
        //Login
        await loginPage.navigateToLogin();
        await loginPage.loginAsStandardUser();
        //Add product to cart
        await productsPage.navigate();
        await productsPage.searchProduct(productToSearch);
        await productsPage.addFirstPRoductToCart();
        await expect(cartPage.firstProductLocator).toHaveText(productToSearch);
        //Proceed checkout
        await cartPage.proceedToCheckout();
        await cartPage.placeOrder();
        //await cartPage.closeAddsModal();
        await paymentPage.payWithCard(
            'Abigail Badilo',
            '4111111111111111',
            '123',
            '06',
            '2030'
        );

        await expect(paymentPage.successAlert).toBeVisible();
        await expect(paymentPage.successAlert).toHaveText(/Congratulations! Your order has been confirmed!/);


    })
})