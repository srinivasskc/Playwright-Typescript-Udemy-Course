import {test,expect} from '@playwright/test'

test.only('Open in new tabbed windows',async({page})=>{
    await page.goto('https://demo.automationtesting.in/Windows.html');


    //This is like reverse, first we are promising that new tab would be popped up when we click on the button..
    const [newTab] = await Promise.all([
        page.waitForEvent('popup'),
        await page.click('button:has-text("click")')
    ])

    await newTab.waitForLoadState();

    await newTab.locator('//span[normalize-space(text())="Downloads"]').click();
    await newTab.waitForTimeout(5000);
    await newTab.close();
    

    await page.waitForTimeout(5000);
    await page.close();
    
})
