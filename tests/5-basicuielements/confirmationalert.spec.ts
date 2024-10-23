import { test, expect } from '@playwright/test'

test('Handling Confirm alerts', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    await page.locator('button[onclick="jsConfirm()"]').click();

    //Without clicking on OK Button, the expect is worked.
    await expect(page.locator('#result')).toHaveText('You clicked: Cancel');
    await page.close();
})


test('Verifying the Alert message - OK Button', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    page.on("dialog", async (alert) => {
        const alertMessage = alert.message();

        expect(alertMessage).toEqual("I am a JS Confirm");
        await alert.accept();
        await expect(page.locator('#result')).toHaveText('You clicked: Ok');
    })
    //First event listener should be checked and then JSButton Click.

    await page.locator('button[onclick="jsConfirm()"]').click();
    await page.close();
})

test.only('Verifying the Alert message - Cancel Button', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    page.on("dialog", async (alert) => {
        const alertMessage = alert.message();

        expect(alertMessage).toEqual("I am a JS Confirm");
        await alert.dismiss();
        await expect(page.locator('#result')).toHaveText('You clicked: Cancel');
    })
    //First event listener should be checked and then JSButton Click.

    await page.locator('button[onclick="jsConfirm()"]').click();
    await page.close();
})