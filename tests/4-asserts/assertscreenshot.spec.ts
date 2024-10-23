import {test,expect} from '@playwright/test'

test('Assert Screenshot',async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/');

    //First run the screenshot is taken. and assert fails as there is no previous screenshot
    //Again new run, the screenshot is compared with previous one.
    await expect(page).toHaveScreenshot();

})