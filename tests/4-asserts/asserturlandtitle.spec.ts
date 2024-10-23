import {test, expect} from '@playwright/test'

test('Assert url', async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/');

    //Full URL Assertion
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    //Partial URL Assertion
    await expect(page).toHaveURL(/demo/);

    await page.close();
})


test('Assert title', async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/');

    //Assert Title
    await expect(page).toHaveTitle('OrangeHRM');

    await page.close();
})