import { Locator, Page } from '@playwright/test';

export class LoginPage {
    // Define types for your locators and page object
    private readonly page: Page;
    private readonly loginFormContainer: Locator;
    private readonly usernameInput: Locator;
    private readonly passwordInput: Locator;
    private readonly loginButton: Locator;
    public readonly errorMessage: Locator;

    constructor(page: Page){
        this.page = page;
        // Locate the specific Login Form container to avoid conflict with Signup Form
        this.loginFormContainer = page.locator('.login-form');

        // Initialize locators using Web-First assertions (User-facing attributes)
        this.usernameInput = this.loginFormContainer.getByPlaceholder('Email Address');
        this.passwordInput = this.loginFormContainer.getByPlaceholder('Password');
        this.loginButton = this.loginFormContainer.getByRole('button', {name: 'Login'});

        // 💡 NEW WEB-FIRST LOCATOR: Finds the exact text on the screen, ignoring extra spaces
        this.errorMessage = page.getByText('Your email or password is incorrect!')
    }

    /**
     * Navigates to the base URL login page
     */
    async navigateToLogin(): Promise<void> {
        //Use the baseURL defined in playwright.config.ts
        await this.page.goto('/login');
    }

    /**
     * Fills credentials and clicks the login button
     * @param username The account username
     * @param password The account password
     */
    async loginWithCredentials(username: string, password: string){
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    /**
     * Helper method to quickly login with a standard successful user
     */
    async loginAsStandardUser(): Promise<void> {
        const username = process.env.QA_USER || 'fallback_user@test.com';
    const password = process.env.QA_PASSWORD || 'fallback_password';
    
    await this.loginWithCredentials(username, password);
    }

    /**
     * Gets the text content of the login error message
     * @returns Promise<string | null>
     */
    public get getErrorMessage(): Locator {
        return this.errorMessage;
    }

}