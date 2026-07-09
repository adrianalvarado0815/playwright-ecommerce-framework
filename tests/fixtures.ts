import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

// 1. Define the types for your custom fixtures
type MyFixtures = {
  loginPage: LoginPage;
  // Future page objects will be added here (e.g., productsPage: ProductsPage;)
};

// 2. Extend the base Playwright test object
export const test = base.extend<MyFixtures>({
  
  // 3. Define the fixture factory for LoginPage
  loginPage: async ({ page }, use) => {
    // Instantiate the page object
    const loginPage = new LoginPage(page);
    
    // Pass the fixture to the test execution
    await use(loginPage);
  },
});

// Export the 'expect' assertion utility from base Playwright
export { expect } from '@playwright/test';

export const describe = test.describe;