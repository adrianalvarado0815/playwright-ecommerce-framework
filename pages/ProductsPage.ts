import { Locator, Page} from '@playwright/test';

export class ProductsPage {
    private readonly page: Page;
    private readonly searchInput: Locator;
    private readonly searchButton:Locator;
    private readonly searchTitle: Locator;

    constructor(page: Page){
        this.page = page;

        this.searchInput = page.getByPlaceholder('Search Product');
        this.searchButton = page.locator('#submit_search');
        this.searchTitle = page.getByRole('heading', { name: 'Searched Products' });
    }

    async navigate(): Promise<void>{
        await this.page.goto('/products');
    }

    async searchProduct(productName: string): Promise<void> {
        await this.searchInput.fill(productName);
        await this.searchButton.click();

    }

    public get title(): Locator {
        return this.searchTitle;
    }
}