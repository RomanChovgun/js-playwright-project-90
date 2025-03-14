import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

let loginPage: LoginPage;

test.describe('Рендеринг страницы приложения (авторизация) - шаг 2', () => {
    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.navigate();
    });

    test('Проверяем, что страница загрузилась', async ({ page }) => {
        await expect(page).toHaveTitle('Vite + React + TS');
    });

    test('Проверяем, что форма логина отображается', async ({ }) => {
        await expect(loginPage.loginForm).toBeVisible();
    });

    test('Проверяем поле ввода логина', async ({ }) => {
        await expect(loginPage.usernameInput).toBeVisible();
        await loginPage.usernameInput.fill('testuser');
        await expect(loginPage.usernameInput).toHaveValue('testuser');
    });

    test('Проверяем поле ввода пароля', async ({ }) => {
        await expect(loginPage.passwordInput).toBeVisible();
        await loginPage.passwordInput.fill('testpassword');
        await expect(loginPage.passwordInput).toHaveValue('testpassword');
    });

    test('Проверяем кнопку авторизации', async ({ }) => {
        await expect(loginPage.loginButton).toBeVisible();
        await loginPage.loginButton.click();
    });
});