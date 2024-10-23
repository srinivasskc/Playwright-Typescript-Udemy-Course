// Confidence Level: Low

import { test, expect } from '@playwright/test'

test('Handling Single Checkbox - Pagination Web Table', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    const table = page.locator('#productTable');

    //Select the checkbox for Product 3 by traversing by name of the product.

    const columns = table.locator('thead tr th');
    console.log('No of columns: ', await columns.count());

    const rows = table.locator('tbody tr')
    console.log('No of rows: ', await rows.count());

    expect(await columns.count()).toBe(4);
    expect(await rows.count()).toBe(5);

    const matchedRows = rows.filter({
        has: page.locator('td'),
        hasText: 'Tablet'
    })

    await matchedRows.locator('input').check();

    await page.pause();
    await page.close();
})



test('Handling Multiple Checkboxes - Pagination Web Table', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    const table = page.locator('#productTable');

    //Select the checkbox for Product 3 by traversing by name of the product.

    const columns = table.locator('thead tr th');
    console.log('No of columns: ', await columns.count());

    const rows = table.locator('tbody tr')
    console.log('No of rows: ', await rows.count());

    expect(await columns.count()).toBe(4);
    expect(await rows.count()).toBe(5);

    //Traversing the products

    await selectProduct(rows, page, 'Tablet');
    await selectProduct(rows, page, 'Smartwatch');
    await selectProduct(rows, page, 'Wireless Earbuds');

    //await page.pause();
    await page.close();
})

async function selectProduct(rows, page, productName) {
    const matchedRows = rows.filter({
        has: page.locator('td'),
        hasText: productName
    })

    //await page.pause();
    await matchedRows.locator('input').check();
}


test('Printing all items from Page 1 - Pagination Web Table', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    const table = page.locator('#productTable');

    //Select the checkbox for Product 3 by traversing by name of the product.

    const columns = table.locator('thead tr th');
    console.log('No of columns: ', await columns.count());

    const rows = table.locator('tbody tr')
    console.log('No of rows: ', await rows.count());

    expect(await columns.count()).toBe(4);
    expect(await rows.count()).toBe(5);

    //For Loop - Traversing the products in Page 1
    for (let i = 0; i < await rows.count(); i++) {
        const row = rows.nth(i);
        const rowdata = row.locator('td');

        for (let j = 0; j < await rowdata.count(); j++) {
            const cellContent = await rowdata.nth(j).textContent();
            console.log(cellContent);
        }
    }
    //await page.pause();
    await page.close();
})


test.only('Printing all items from all other pages - pagination web table', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    const table = page.locator('#productTable');

    const columns = table.locator('thead tr th');
    const rows = table.locator('tbody tr')

    // Pagination Locator:
    const pages = page.locator('#pagination li a');
    const totalPages = await pages.count();
    console.log("Total No of Pages: ", totalPages);

    //p means pages
    for (let p = 0; p < totalPages; p++) {
        if (p > 0) {
            await pages.nth(p).click();
        }

        for (let i = 0; i < await rows.count(); i++) {
            const row = rows.nth(i);
            const rowdata = row.locator('td');

            for (let j = 0; j < await rowdata.count(); j++) {
                const cellContent = await rowdata.nth(j).textContent();
                console.log(cellContent);
            }
        }
    }

    await page.close();
})