import {test,expect} from '@playwright/test';

test('Assert element attribute',async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/');
    await expect(page.locator('//input[@placeholder="Username"]')).toHaveAttribute('name','username');

    //This will fail
    // await expect(page.locator('//input[@placeholder="Username"]')).toHaveAttribute('class','oxd-input')

    //For class names, when we have spaces in class. we can pick the first one.
    //While writing the class name: /.*class-name/
    await expect(page.locator('//input[@placeholder="Username"]')).toHaveAttribute('class',/.*oxd-input/)

    await page.close();

})
