import {test, expect} from '@playwright/test'
import {faker} from '@faker-js/faker'

test('Add new tod list', async ({page, request}) => {

   // Sign up a new user 
    await  page.goto('/signup');
    await  page.fill('[data-testid="first-name"]', faker.person.firstName())
    await  page.fill('[data-testid="last-name"]', faker.person.lastName())
    await  page.fill('[data-testid="email"]',faker.internet.exampleEmail())
    await  page.fill('[data-testid="password"]','Ahmed@111')
    await  page.fill('[data-testid="confirm-password"]','Ahmed@111')
    await  page.click('[data-testid="submit"]')
   
    // Add new todo list

    await page.click('[data-testid="add"]')
    await page.fill('[data-testid="new-todo"]','New todo List By Ahmed')
    await page.click('[data-testid="submit-newTask"]')
    const todoText = await page.locator('[data-testid="todo-item"]').nth(0).innerText()
    expect(todoText).toEqual('New todo List By Ahmed')


});

test('should be able to delete a todo item', async ({page}) => {
     // Sign up a new user 
     await  page.goto('/signup');
     await  page.fill('[data-testid="first-name"]', faker.person.firstName())
     await  page.fill('[data-testid="last-name"]', faker.person.lastName())
     await  page.fill('[data-testid="email"]',faker.internet.exampleEmail())
     await  page.fill('[data-testid="password"]','Ahmed@111')
     await  page.fill('[data-testid="confirm-password"]','Ahmed@111')
     await  page.click('[data-testid="submit"]')
    
     // Add new todo list
 
     await page.click('[data-testid="add"]')
     await page.fill('[data-testid="new-todo"]','New todo List By Ahmed')
     await page.click('[data-testid="submit-newTask"]')

     // Delete todo item from list

     await page.click('[data-testid="delete"]')
     const noTodosMessage =  page.locator('[data-testid="no-todos"]')
     await expect(noTodosMessage).toBeVisible()


})