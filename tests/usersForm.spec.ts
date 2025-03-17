import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { UsersPage } from '../pages/UsersPage';
import { NavigationPage } from '../pages/NavigationPage';
import { validCredentials } from '../fixtures/auth';
import { LOGIN_URL, USERS_URL } from '../config/config';

test('Убедиться, что форма создания пользователя отображается корректно', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const usersPage = new UsersPage(page);
    const navigationPage = new NavigationPage(page);

    // Шаг 1: Перейти на страницу входа
    await loginPage.navigate();
    await expect(loginPage.page).toHaveURL(LOGIN_URL);

    // Шаг 2: Авторизоваться с валидными данными
    await loginPage.login(validCredentials.username, validCredentials.password);

    // Шаг 3: Перейти на страницу пользователей через навигационную панель
    await navigationPage.navigateToUsers();
    await expect(page).toHaveURL(USERS_URL);

    // Шаг 4: Перейти на страницу создания пользователя
    await usersPage.clickCreateButton();

    // Шаг 5: Проверить, что форма создания пользователя отображается корректно
    await usersPage.isCreateUserFormVisible();
});