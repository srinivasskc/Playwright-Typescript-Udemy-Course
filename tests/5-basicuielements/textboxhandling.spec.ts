import {test,expect} from '@playwright/test';

//test with fill method. earlier, there was type, that is repaced with fill.
test('Text Box UI Element Handling',async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com');
    await page.locator('//input[@placeholder="Username"]').fill('Admin');
    await page.locator('input[placeholder="Password"]').fill('admin123');
    await page.locator('//button[@type="submit"]').click();
    await page.locator('//span[@class="oxd-userdropdown-tab"]').click();
    await page.locator('text=Logout').click();
    await page.close();
})

//test with press sequentially method.
//The fill will put directly into the text box/
//Press Sequentially will press each letter one by one as we type on keyboard.

test('Text Box - Press Sequentially',async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com');
    await page.locator('//input[@placeholder="Username"]').pressSequentially('Admin');
    await page.locator('input[placeholder="Password"]').pressSequentially('admin123');
    await page.locator('input[placeholder="Password"]').press('Enter');
    
    await page.locator('//span[@class="oxd-userdropdown-tab"]').click();
    await page.locator('text=Logout').click();
    await page.close();
})


//test with press sequentially method and delay BY 200ms.

test.only('Text Box - Press Sequentially and Delay',async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com');
    await page.locator('//input[@placeholder="Username"]').pressSequentially('Admin',{delay:200});
    await page.locator('input[placeholder="Password"]').pressSequentially('admin123',{delay:200});
    await page.locator('input[placeholder="Password"]').press('Enter');
    
    await page.locator('//span[@class="oxd-userdropdown-tab"]').click();
    await page.locator('text=Logout').click();
    await page.close();
})

