import {test,expect} from '@playwright/test';
// This we need from Playwright/test folder.


// We have test function, name of the the test, async function with parameter is page.
// This is default structure of test.

test('My First Test',async({page})=>{

//Here we have created a page, which is created for a test.
// async - The keyword async before the function makes the function returns a promise,
// await - The keyword await before a function makes the function to wait for a promise.

// So when we are doing this, we are making sure the test is running in a synchronization way, which means it will wait until the browser opens.
// For example, if we are clicking on a button, it will wait until the button is clicked like that.

    await page.goto("https://www.google.com");


    //Expect
    await expect(page).toHaveTitle("Google");

})
