import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import ToDoPage from '../pages/ToDoPage';


test('should be able to login successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const todoPage = new ToDoPage(page);
    await loginPage.loginPageLoad();
    await loginPage.enterUserName('ahmedtesting@qacart.com');
    await loginPage.enterPassword('Ahmed@12345');
    await loginPage.clickLoginButton();
    const welcomeMessage = todoPage.getWelcomeMessage()
    await expect(welcomeMessage).toBeVisible();
});
