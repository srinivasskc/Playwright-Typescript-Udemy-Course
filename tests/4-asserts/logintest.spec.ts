// This is about https://opensource-demo.orangehrmlive.com/web/index.php/auth/login

import {test,expect} from '@playwright/test';
import { text } from 'stream/consumers';

test('Login Test Scenario', async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com');
    await page.locator('//input[@placeholder="Username"]').fill('Admin');
    await page.locator('input[placeholder="Password"]').fill('admin123');

    await page.locator('//button[@type="submit"]').click();

    await page.locator('//span[@class="oxd-userdropdown-tab"]').click();

    await page.locator('text=Logout').click();

    await page.close();


})