import { Page } from '@playwright/test';
import {faker} from '@faker-js/faker'

export default class LoginPage {

    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // elments loctaors of todos page 

    private get userNameInput () {
        return '[data-testid="email"]'; 
    }

    private get PasswordInput () {
        return '[data-testid="password"]'; 
    }

    private get loginButton () {
        return '[data-testid="submit"]'; 
    }

    private get loginErrorMessage () {
        return '[data-testid="error-alert"]'; 
    }

    async loginPageLoad (){
        await this.page.goto('/login')

    }
    async enterUserName (username: string) {
         await this.page.waitForSelector(this.userNameInput);
         await this.page.fill(this.userNameInput, username)

    }
    async enterPassword (password: string) {
        await this.page.waitForSelector(this.PasswordInput);
        await this.page.fill(this.PasswordInput, password)

    }

    async clickLoginButton (){
        await this.page.waitForSelector(this.loginButton)
        await this.page.click(this.loginButton)

    }

    async getErrorMessage (){
        return this.page.locator('[data-testid="error-alert"]');

    }

}