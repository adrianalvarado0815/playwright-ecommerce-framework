import { Page, Locator } from '@playwright/test'

export class PaymentPage {
    private readonly page: Page;
    private readonly nameOnCardInput: Locator;
    private readonly cardNumberInput: Locator;
    private readonly cvcInput: Locator;
    private readonly expiryMonthInput: Locator;
    private readonly expiryYearInput: Locator;
    private readonly payButton: Locator;
    private readonly successMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.nameOnCardInput = page.locator('input[name="name_on_card"]');
        this.cardNumberInput = page.locator('input[name="card_number"]');
        this.cvcInput = page.locator('input[name="cvc"]');
        this.expiryMonthInput = page.locator('input[name="expiry_month"]');
        this.expiryYearInput = page.locator('input[name="expiry_year"]');
        this.payButton = page.locator('#submit'); // Botón "Pay and Confirm Order"
        this.successMessage = page.getByText('Order Placed! Congratulations');
    }

    async payWithCard (name: string, cardNumber: string, cvc: string, month: string, year: string): Promise<void>{
        await this.nameOnCardInput.fill(name);
        await this.cardNumberInput.fill(cardNumber);
        await this.cvcInput.fill(cvc);
        await this.expiryMonthInput.fill(month);
        await this.expiryYearInput.fill(year);
        await this.payButton.click();
    }

    public get successAlert(): Locator {
        return this.successMessage;
    }
}