
import {test, expect} from '@playwright/test';
import RegisterPage from '../pages/RegisterPage'
import TodoPage from '../pages/ToDoPage';


test('should be able to register to the todo wensite', async ({page}) => {

    const registerPage = new RegisterPage(page)
    const todoPage = new TodoPage(page)
    registerPage.loadSignUpPage()
    registerPage.enterFirstName()
    registerPage.enterLastName()
    registerPage.enterEmailAddress()
    registerPage.enterPsssword()
    registerPage.enterConfirmOPassword()
    registerPage.clickSubmitButton()
    const welcomeMessage = todoPage.getWelcomeMessage()
    await expect(welcomeMessage).toBeVisible();
});