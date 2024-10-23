import { test, expect } from '@playwright/test'

test.only('Handling Confirm alerts', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    await page.locator('button[onclick="jsPrompt()"]').click();

    await page.pause();
    //Without clicking on OK Button, the expect is worked.
    await expect(page.locator('#result')).toHaveText('You entered: null');
    await page.close();
})


test.only('Verifying the Prompt Alert with message - OK Button', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    page.on("dialog", async (alert) => {
        const alertMessage = alert.message();

        expect(alertMessage).toEqual("I am a JS prompt");
        await alert.accept("Playwright");
        await expect(page.locator('#result')).toHaveText('You entered: Playwright');
    })
    //First event listener should be checked and then JSButton Click.

    await page.locator('button[onclick="jsPrompt()"]').click();
    await page.close();
})

test.only('Verifying the Prompt Alert message - Cancel Button', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    page.on("dialog", async (alert) => {
        const alertMessage = alert.message();

        expect(alertMessage).toEqual("I am a JS prompt");
        await alert.dismiss();
        await expect(page.locator('#result')).toHaveText('You entered: null');
    })
    //First event listener should be checked and then JSButton Click.

    await page.locator('button[onclick="jsPrompt()"]').click();
    await page.close();
})