import {Locator, Page} from '@playwright/test';

export class CartPage {
    private readonly page: Page;
    private readonly cartProductRow: Locator;
    private readonly proceedToCheckoutButton: Locator;
    private readonly placeOrderButton: Locator;
    private readonly closeAdds: Locator;

    constructor(page: Page) {
        this.page = page;
        this.cartProductRow = page.locator('.cart_description h4 a');
        this.proceedToCheckoutButton = page.getByText('Proceed To Checkout'); 
        this.placeOrderButton = page.locator('a[href="/payment"]');
        this.closeAdds = page.locator('iframe[name="aswift_1"]').contentFrame().getByRole('button', { name: 'Close ad' });

    }

    async navigate(): Promise<void> {
        await this.page.goto('/view_cart');

    }

    async proceedToCheckout(): Promise<void> {
        await this.proceedToCheckoutButton.click();
    }

    async placeOrder(): Promise<void> {
        await this.placeOrderButton.click();
    } 

    async closeAddsModal(): Promise<void>{
        await this.closeAdds.click();
    }
    async getFirstProductName(): Promise<string | null> {
        return await this.cartProductRow.first().textContent();
    }

    public get firstProductLocator(): Locator {
        return this.cartProductRow.first();
    }
        
    }
