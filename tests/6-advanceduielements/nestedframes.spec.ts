//Frame inside Frame - Nested Frames

import { test, expect } from '@playwright/test'

test('Handling Nested Frames', async ({ page }) => {
    await page.goto('https://ui.vision/demo/webtest/frames/');

    const frame1 = page.frame({ url: 'https://ui.vision/demo/webtest/frames/frame_3.html' });

    //calling child frames

    const childFrames = frame1?.childFrames();
    console.log("No of Child Frames: ", childFrames?.length);

    if (childFrames && childFrames.length > 0) {
        await childFrames[0].locator('//*[@id="i8"]/div[3]/div').check({ force: true });
        await page.waitForTimeout(5000);
        await childFrames[0].locator('//*[@id="i19"]/div[2]').check({ force: true });
        await page.waitForTimeout(5000);
    }
    await page.close();
})