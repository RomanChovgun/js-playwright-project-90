import { Page, Locator } from '@playwright/test';
import { LOGIN_URL } from '../config/config';

export class DashboardPage {
    readonly page: Page;
    readonly userAvatar: Locator;
    readonly logoutButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.userAvatar = page.getByRole('button', { name: 'Profile' });
        this.logoutButton = page.getByRole('menuitem', { name: 'Logout' });
    }

    async logout() {
        await this.userAvatar.click();
        await this.logoutButton.click();
        await this.page.waitForURL(LOGIN_URL);
    }
}