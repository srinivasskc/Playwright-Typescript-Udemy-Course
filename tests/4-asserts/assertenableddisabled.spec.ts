import {test,expect} from '@playwright/test'

test("Find if the button is enabled or disabled", async({page})=>{
    await page.goto("https://letcode.in/buttons");
    await page.locator('#home').isEnabled();
    await page.locator('(//button[@id="isDisabled"])[1]').isDisabled();
    await page.close();
})

test.only("Assert if the button is enabled or disabled", async({page})=>{
    await page.goto("https://letcode.in/buttons");
    await expect(page.locator('#home')).toBeEnabled();
    await expect(page.locator('(//button[@id="isDisabled"])[1]')).toBeDisabled();
    await page.close();
})