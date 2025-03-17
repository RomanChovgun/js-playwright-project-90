import { Locator, Page } from '@playwright/test';

export class NavigationPage {
    readonly page: Page;
    readonly dashboardLink: Locator;
    readonly tasksLink: Locator;
    readonly usersLink: Locator;
    readonly labelsLink: Locator;
    readonly taskStatusesLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.dashboardLink = page.locator('a[href="#/"]');
        this.tasksLink = page.locator('a[href="#/tasks"]');
        this.usersLink = page.locator('a[href="#/users"]');
        this.labelsLink = page.locator('a[href="#/labels"]');
        this.taskStatusesLink = page.locator('a[href="#/task_statuses"]');
    }

    async navigateToDashboard() {
        await this.dashboardLink.click();
    }

    async navigateToTasks() {
        await this.tasksLink.click();
    }

    async navigateToUsers() {
        await this.usersLink.click();
    }

    async navigateToLabels() {
        await this.labelsLink.click();
    }

    async navigateToTaskStatuses() {
        await this.taskStatusesLink.click();
    }
}