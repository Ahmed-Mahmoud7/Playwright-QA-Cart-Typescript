
import {test, expect} from '@playwright/test';
import RegisterPage from '../pages/RegisterPage'
import TodoPage from '../pages/ToDoPage';

test.describe('Registeration test suite @Smoke', () => {
    
    test('should be able to register to the todo wensite', async ({page}) => {
    const registerPage = new RegisterPage(page) 
    const todoPage = new TodoPage(page)
    await registerPage.loadSignUpPage()
    await registerPage.enterFirstName()
    await registerPage.enterLastName()
    await registerPage.enterEmailAddress()
    await registerPage.enterPsssword()
    await registerPage.enterConfirmOPassword()
    await registerPage.clickSubmitButton()
      const welcomeMessage = todoPage.getWelcomeMessage()
    await expect(welcomeMessage).toBeVisible();
});})
