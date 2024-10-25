import {test,expect} from '@playwright/test'

test.only('Handling Date Picker - Input and Select',async({page})=>{
    await page.goto('https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo');

    let date = "2023-05-01";
// To get the date format, enter - "document.getElementById('birthday').value"
    await page.locator('#birthday').fill(date);

    await page.waitForTimeout(5000);
    await page.close();
})