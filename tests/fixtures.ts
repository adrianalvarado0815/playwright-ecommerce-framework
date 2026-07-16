import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';
import { PaymentPage } from '../pages/PaymentPage';

// 1. Define the types for your custom fixtures
type MyFixtures = {
  loginPage: LoginPage;
  productsPage: ProductsPage;
  cartPage: CartPage;
  paymentPage: PaymentPage
  // Future page objects will be added here (e.g., productsPage: ProductsPage;)
};

// 2. Extend the base Playwright test object
export const test = base.extend<MyFixtures>({
  
  // 3. Define the fixture factory for LoginPage
  loginPage: async ({ page }, use) => {
    // Instantiate the page object
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },
  productsPage: async({page}, use) => {
    const productsPage = new ProductsPage(page);
    await use(productsPage);
  },

  cartPage: async({page}, use) => {
    const cartPage = new CartPage(page);
    await use(cartPage);
  },

  paymentPage: async({page}, use) => {
    const paymentPage = new PaymentPage(page);
    await use(paymentPage);
  }
});

// Export the 'expect' assertion utility from base Playwright
export { expect } from '@playwright/test';

export const describe = test.describe;