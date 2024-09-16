import { Page } from '@playwright/test';
import {faker} from '@faker-js/faker'

export default class RegisterPage {

    // constructor
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }
    

    // Elements "locstors" 

    private get firstNameInput() {
        return '[data-testid="first-name"]'
    }

    private get lastNameInput() {
        return '[data-testid="last-name"]'
    }

    private get emailAddressInput() {
        return '[data-testid="email"]'
    }

    private get passwordInput() {
        return '[data-testid="password"]'
    }

    private get confirmPasswordInput() {
        return '[data-testid="confirm-password"]'
    }

    private get registerSubmitButton() {
        return '[data-testid="submit"]'
    }

    // Steps "Methods"

    async loadSignUpPage (){
        await this.page.goto('/signup')
        

    }
    async enterFirstName (){
        await this.page.waitForSelector(this.firstNameInput);
        await this.page.fill(this.firstNameInput, faker.person.firstName())

    }
    async enterLastName (){
        await this.page.waitForSelector(this.lastNameInput);
        await this.page.fill(this.lastNameInput, faker.person.lastName())

    }
    async enterEmailAddress (){
        await this.page.waitForSelector(this.emailAddressInput);
        await this.page.fill(this.emailAddressInput, faker.internet.exampleEmail())

    }
    async enterPsssword (){
        await this.page.waitForSelector(this.passwordInput);
        await this.page.fill(this.passwordInput, 'Test@12345')

    }
    async enterConfirmOPassword (){
        await this.page.waitForSelector(this.confirmPasswordInput);
        await this.page.fill(this.confirmPasswordInput, 'Test@12345')

    }

    async clickSubmitButton (){
        await this.page.waitForSelector(this.registerSubmitButton)
        await this.page.click(this.registerSubmitButton)

    }




}