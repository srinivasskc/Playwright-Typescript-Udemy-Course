import {test,expect} from '@playwright/test'

test('Open in new tabbed windows',async({page})=>{
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


test('Open in new separate window',async({page})=>{
    await page.goto('https://demo.automationtesting.in/Windows.html');

    await page.locator('.analystic[href="#Seperate"]').click();

    //This is like reverse, first we are promising that new tab would be popped up when we click on the button..
    const [newWindow] = await Promise.all([
        page.waitForEvent('popup'),
        await page.click('button[onclick="newwindow()"]')
    ])

    await newWindow.waitForLoadState();

    await newWindow.locator('//span[normalize-space(text())="Downloads"]').click();
    await newWindow.waitForTimeout(5000);
    await newWindow.close();
    

    await page.waitForTimeout(5000);
    await page.close();
    
})

test('Open separate multiple windows',async({page})=>{
    await page.goto('https://demo.automationtesting.in/Windows.html');

    await page.locator('.analystic[href="#Multiple"]').click();

    //This is like reverse, first we are promising that new tab would be popped up when we click on the button..
    const [multipleTabs] = await Promise.all([
        page.waitForEvent('popup'),
        await page.click('button[onclick="multiwindow()"]')
    ])

    await multipleTabs.waitForLoadState();
    await multipleTabs.waitForTimeout(5000);

    const pages = multipleTabs.context().pages();
    console.log("Total Pages opened: ", pages.length);

    await pages[1].locator('#email').fill('srinitest@gmail.com');
    await multipleTabs.waitForTimeout(5000);

    await pages[2].locator('//span[normalize-space(text())="Downloads"]').click();
    await multipleTabs.waitForTimeout(5000);
    
    await pages[1].close();
    await pages[2].close();
    
    await multipleTabs.close();
    
})


test.only('Handling multiple windows',async({page})=>{
    await page.goto('https://www.hyrtutorials.com/p/window-handles-practice.html');

    const [multipleWindows] = await Promise.all([
        page.waitForEvent('popup'),
        await page.click('button[onclick="newBrowserWindows()"]')
    ])

    await multipleWindows.waitForLoadState();
    await multipleWindows.waitForTimeout(5000);

    const pages = multipleWindows.context().pages();
    console.log("Total Pages opened: ", pages.length);

    await pages[2].locator('(//input[@name="name"])[1]').fill('srinivas');
    await multipleWindows.waitForTimeout(5000);

    await pages[1].locator('#firstName').fill('Srinivas');
    await multipleWindows.waitForTimeout(5000);
    
    await pages[2].close();
    await pages[1].close();
    
    await multipleWindows.close();


    await page.waitForTimeout(5000);
    await page.close();
})



