import { test, expect } from '@playwright/test';

test.describe('Рендеринг страницы приложения (авторизация) - шаг 2', () => {
    test.beforeEach(async ({ page }) => {
        // Переходим на страницу перед каждым тестом
        await page.goto('http://localhost:5173');
    });

    test('Проверяем, что страница загрузилась', async ({ page }) => {
        await expect(page).toHaveTitle('Vite + React + TS');
    });

    test('Проверяем, что форма логина отображается', async ({ page }) => {
        const loginForm = page.locator('.RaLogin-card');
        await expect(loginForm).toBeVisible();
    });

    test('Проверяем поле ввода username', async ({ page }) => {
        const usernameInput = page.locator('input[name="username"]');
        await expect(usernameInput).toBeVisible();
        await usernameInput.fill('testuser');
        await expect(usernameInput).toHaveValue('testuser');
    });

    test('Проверяем поле ввода password', async ({ page }) => {
        const passwordInput = page.locator('input[name="password"]');
        await expect(passwordInput).toBeVisible();
        await passwordInput.fill('testpassword');
        await expect(passwordInput).toHaveValue('testpassword');
    });

    test('Проверяем кнопку Sign in', async ({ page }) => {
        const signInButton = page.locator('button:has-text("Sign in")');
        await expect(signInButton).toBeVisible();
        await signInButton.click();
    });
});