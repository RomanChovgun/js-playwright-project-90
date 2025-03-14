import { Page, Locator } from '@playwright/test';
import { LOGIN_URL } from '../config/config';

export class LoginPage {
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly errorMessage: Locator;
    loginForm: Locator;

    constructor(page: Page) {
        this.page = page;
        this.loginForm = page.locator('.RaLogin-card');
        this.usernameInput = page.getByRole('textbox', { name: 'Username' });
        this.passwordInput = page.getByRole('textbox', { name: 'Password' });
        this.loginButton = page.getByRole('button', { name: 'Sign in' });
        this.errorMessage = page.getByRole('alert');
    }

    async navigate() {
        await this.page.goto(LOGIN_URL);
    }

    async login(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async getErrorMessage() {
        return this.errorMessage.innerText();
    }
}