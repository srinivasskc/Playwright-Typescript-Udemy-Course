import {test,expect} from '@playwright/test'

test("Assert if the text matches or not",async({page})=>{
    await page.goto("https://letcode.in/buttons");
    await expect(page.locator('#color')).toHaveText('What is my color?');
    
    await expect(page.locator('#property')).toHaveText('How tall & fat I am?');
    await expect(page.locator('#property')).not.toHaveText('How tall & fat I am.?');

    await page.close();
})