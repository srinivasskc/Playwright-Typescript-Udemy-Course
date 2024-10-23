import {test,expect} from '@playwright/test';


test('Different Locator Strategies using playwright inspector', async({page})=>{

    await page.goto('https://www.saucedemo.com/');
    await page.pause();

    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="login-button"]').click();
})