import { Locator, Page} from '@playwright/test';

export class ProductsPage {
    private readonly page: Page;
    private readonly searchInput: Locator;
    private readonly searchButton:Locator;
    private readonly searchTitle: Locator;
    private readonly firstProductAddToCart: Locator;
    private readonly viewCartLink: Locator;

    constructor(page: Page){
        this.page = page;

        this.searchInput = page.getByPlaceholder('Search Product');
        this.searchButton = page.locator('#submit_search');
        this.searchTitle = page.getByRole('heading', { name: 'Searched Products' });
        this.firstProductAddToCart = page.locator('.productinfo .add-to-cart').first();
        this.viewCartLink = page.getByRole('link', { name: 'View Cart'});
    }

    async navigate(): Promise<void>{
        await this.page.goto('/products');
    }

    async searchProduct(productName: string): Promise<void> {
        await this.searchInput.fill(productName);
        await this.searchButton.click();

    }
    async addFirstPRoductToCart(): Promise<void> {
        await this.firstProductAddToCart.click();
        await this.viewCartLink.click();
    }

    public get title(): Locator {
        return this.searchTitle;
    }
}