import {Locator, Page} from '@playwright/test';

export class CartPage {
    private readonly page: Page;
    private readonly cartProductRow: Locator;

    constructor(page: Page) {
        this.page = page;
        this.cartProductRow = page.locator('.cart_description h4 a');
    }

    async navigate(): Promise<void> {
        await this.page.goto('/view_cart');

    }

    async getFirstProductName(): Promise<string | null> {
        return await this.cartProductRow.first().textContent();
    }

    public get firstProductLocator(): Locator {
        return this.cartProductRow.first();
    }
        
    }
