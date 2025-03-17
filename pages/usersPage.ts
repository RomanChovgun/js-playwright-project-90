import { expect, Locator, Page } from '@playwright/test';

export class UsersPage {
    readonly page: Page;
    readonly usersTable: Locator;
    readonly createButton: Locator;
    readonly exportButton: Locator;
    readonly refreshButton: Locator;
    readonly userMenuButton: Locator;

    // Локаторы для формы создания пользователя
    readonly createUserForm: Locator;
    readonly emailInput: Locator;
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly submitButton: Locator;

    constructor(page: Page) {
        this.page = page;

        // Локаторы для таблицы и кнопок
        this.usersTable = page.locator('.RaDatagrid-table');
        this.createButton = page.locator('a[aria-label="Create"]'); // Кнопка "Create" — это <a>
        this.exportButton = page.locator('button[aria-label="Export"]');
        this.refreshButton = page.locator('button[aria-label="Refresh"]');
        this.userMenuButton = page.locator('button[aria-label="Profile"]');

        // Локаторы для формы создания пользователя
        this.createUserForm = page.locator('.RaCreate-main');
        this.emailInput = page.locator('input[name="email"]'); // Поле ввода email
        this.firstNameInput = page.locator('input[name="firstName"]'); // Поле ввода имени
        this.lastNameInput = page.locator('input[name="lastName"]'); // Поле ввода фамилии
        this.submitButton = page.locator('button[type="submit"]'); // Кнопка "Save"
    }

    async navigate() {
        await this.page.goto('/#/users');
    }

    async clickCreateButton() {
        await this.createButton.waitFor({ state: 'visible' });
        await this.createButton.click();
    }

    async isCreateUserFormVisible() {
        await expect(this.createUserForm).toBeVisible();
        await expect(this.emailInput).toBeVisible();
        await expect(this.firstNameInput).toBeVisible();
        await expect(this.lastNameInput).toBeVisible();
        await expect(this.submitButton).toBeVisible();
    }

    // Метод для заполнения формы создания пользователя
    async fillCreateUserForm(email: string, firstName: string, lastName: string) {
        await this.emailInput.fill(email);
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
    }

}