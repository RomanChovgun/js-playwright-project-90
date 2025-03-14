import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { DashboardPage } from '../pages/dashboardPage';
import {
    validCredentials,
    noUsernameCredentials,
    noPasswordCredentials,
    emptyCredentials,
} from '../fixtures/auth';
import { LOGIN_URL, DASHBOARD_URL } from '../config/config';

test.describe('Тесты авторизации', () => {
    let loginPage: LoginPage;
    let dashboardPage: DashboardPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        dashboardPage = new DashboardPage(page);
        await loginPage.navigate();
    });

    test('Успешная авторизация и проверка выхода', async () => {
        await loginPage.login(validCredentials.username, validCredentials.password);
        await expect(loginPage.page).toHaveURL(DASHBOARD_URL);

        await dashboardPage.logout();
        await expect(loginPage.page).toHaveURL(LOGIN_URL);
    });

    test('Не успешная авторизация (не заполнен логин)', async () => {
        await loginPage.login(noUsernameCredentials.username, noUsernameCredentials.password);
        const errorMessage = await loginPage.getErrorMessage();
        expect(errorMessage).toContain('The form is not valid. Please check for errors');
    });

    test('Не успешная авторизация (не заполнен пароль)', async () => {
        await loginPage.login(noPasswordCredentials.username, noPasswordCredentials.password);
        const errorMessage = await loginPage.getErrorMessage();
        expect(errorMessage).toContain('The form is not valid. Please check for errors');
    });

    test('Не успешная авторизация (не заполнены логин и пароль)', async () => {
        await loginPage.login(emptyCredentials.username, emptyCredentials.password);
        const errorMessage = await loginPage.getErrorMessage();
        expect(errorMessage).toContain('The form is not valid. Please check for errors');
    });

});