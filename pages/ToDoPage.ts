import { Page } from '@playwright/test';
import {faker} from '@faker-js/faker'

export default class TodoPage {

    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // elments loctaors of todos page 

    private get welcomeMessage () {
        return '[data-testid="welcome"]'; 
    }

    getWelcomeMessage () {
        return this.page.locator('[data-testid="welcome"]');
}
}