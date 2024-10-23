import {test,expect} from '@playwright/test'

// This will fail, as frames are located in different ways.
test('Writing text in Tinymc Editor',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/iframe');
    await page.locator('#tinymce').fill("This is my text");
    await page.close();
})


// Handling Frames using page.frame()

test('Writing text in Editor using page.frame',async({page})=>{
    await page.goto('https://www.lambdatest.com/selenium-playground/iframe-demo/');

    //First lets find total no of frames in the page.
    const allFrames = page.frames();
    const allFramesCount = allFrames.length;
    console.log('Total Frames Count: ',allFramesCount);

    const frame1 = await page.frame({url:'https://www.lambdatest.com/selenium-playground/iframe-demo/contant'});

    await frame1?.locator('.rsw-ce').fill('This is my text in iframe');

    await page.waitForTimeout(5000);
    await page.close();
})


test.only('Writing text in Editor using page.framelocator',async({page})=>{
    await page.goto('https://www.lambdatest.com/selenium-playground/iframe-demo/');

    //First lets find total no of frames in the page.
    const allFrames = page.frames();
    const allFramesCount = allFrames.length;
    console.log('Total Frames Count: ',allFramesCount);

    //const frame1 = await page.frameLocator('#iFrame1');

    const frame1 = await page.frameLocator("iframe[src='./contant']");

    await frame1?.locator('.rsw-ce').fill('This is my text in iframe');

    await page.waitForTimeout(5000);
    await page.close();
})