import {test,expect} from '@playwright/test';


test('Different Locator Strategies', async({page})=>{

    await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').fill('standard_user')

    await page.locator('[id="password"]').fill('secret_sauce');

    await page.locator('input:has-text("Login")').click();
/*

    await page.locator('text=Login').click();

    

    await page.locator('//input[@id="login-button"]').click();
*/
})