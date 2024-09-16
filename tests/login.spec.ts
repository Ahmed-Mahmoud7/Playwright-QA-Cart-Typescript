import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import ToDoPage from '../pages/ToDoPage';

test.describe('Login test suites @Regression', () => {
    test('should be able to login successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const todoPage = new ToDoPage(page);
    await loginPage.loginPageLoad();
    await page.screenshot({path:'screenshots/login1.png'});
    await loginPage.enterUserName('ahmedtesting@qacart.com');
    await page.screenshot({path:'screenshots/login2.png'});
    await loginPage.enterPassword('Ahmed@12345');
    await page.screenshot({path:'screenshots/login3.png'});
    await loginPage.clickLoginButton();
    await page.screenshot({path:'screenshots/login4.png'});
    const welcomeMessage = todoPage.getWelcomeMessage()
    await expect(welcomeMessage).toBeVisible();
    await page.screenshot({path:'screenshots/login5.png'});
});})    

