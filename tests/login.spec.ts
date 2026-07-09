// Important: Import 'test' and 'expect' from your local fixtures file, NOT from @playwright/test
import { test, expect, describe } from './fixtures';

test.describe('Authentication Tests', () => {
  
  test.beforeEach(async ({ loginPage }) => {
    // Navigate to login page before every test case
    await loginPage.navigateToLogin();
  });

  test('Should login successfully with valid credentials', async ({ loginPage, page }) => {
    // Act
    await loginPage.loginAsStandardUser();

    // Assert (Automation Exercise redirects to the homepage after a successful login)
    await expect(page).toHaveURL('https://automationexercise.com/');

   // Optional: Verify that the "Logout" button is now visible in the navbar
    await expect(page.getByRole('link', { name: 'Logout' })).toBeVisible();
  });

  test('Should display error message with invalid credentials', async ({ loginPage }) => {
    // Act
    await loginPage.loginWithCredentials('locked_out_user', 'wrong_password');
  });
});