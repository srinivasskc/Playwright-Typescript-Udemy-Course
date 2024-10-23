import {test,expect} from '@playwright/test'

test('Handling simple alerts',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    await page.locator('button[onclick="jsAlert()"]').click();

    //Without clicking on OK Button, the expect is worked.
    await expect(page.locator('#result')).toHaveText('You successfully clicked an alert');
    await page.close();
})


test.only('Verifying the Alert message',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
      
    page.on("dialog",async(alert)=>{
        const alertMessage=alert.message();

        expect(alertMessage).toEqual("I am a JS Alert");
        await alert.accept();
        await expect(page.locator('#result')).toHaveText('You successfully clicked an alert');
    })
//First event listener should be checked and then JSButton Click.

    await page.locator('button[onclick="jsAlert()"]').click();


    await page.close();
})