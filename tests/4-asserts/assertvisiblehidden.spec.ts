// Playwright Test uses expect library for assertions. Expect library comes as part of Playwright package.
// The test without assertion is not an ideal test

/*
- Element is visible or hidden
- Element is present or not in DOM
- Element is enabled or disabled
- Element text matches or mismatches
- Element Attributes
- URL 
- Title
- Screenshot and Compare it
*/

// Demo Website: https://www.letskodeit.com/practice

import {test, expect} from '@playwright/test';

test('Element is visible or hidden', async({page})=>{
    await page.goto('https://www.letskodeit.com/practice');

    await expect(page.locator('#displayed-text')).toBeVisible();
    await page.locator('//input[@value="Hide"]').click();
    await expect(page.locator('#displayed-text')).toBeHidden();
    await page.locator('//input[@value="Show"]').click();
    await page.close();
})




