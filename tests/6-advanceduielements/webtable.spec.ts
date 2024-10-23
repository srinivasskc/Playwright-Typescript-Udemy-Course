import {test,expect} from '@playwright/test'

test('Handling Static Web Table',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    const table = page.locator('table[name="BookTable"]');

    //Find the total no of rows and columns.
    const columns = table.locator('tr th');
    console.log('No of columns: ', await columns.count());

    const rows = table.locator('tbody tr')
    console.log('No of rows: ', await rows.count());

    expect(await columns.count()).toBe(4);
    expect(await rows.count()).toBe(7);
    
    await page.close();
})