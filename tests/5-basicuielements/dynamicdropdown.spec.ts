import {test,expect} from '@playwright/test'

test('Handling Dynamic Dropdown using search', async({page})=>{
    await page.goto('https://demo.automationtesting.in/Register.html');

    await page.locator('span[role="combobox"]').click();

    await page.pause();
    await page.locator('input[role="textbox"]').fill('India');

    await page.pause();
    await page.locator('ul#select2-country-results>li').click();

    await page.pause();
    await page.close();
})

test.only('Handling Dynamic Dropdown without search', async({page})=>{
    await page.goto('https://demo.automationtesting.in/Register.html');
    await page.locator('span[role="combobox"]').click();


    //Scan all the values within the dropdown and matching one will display.
    await page.pause();
    await page.locator('ul#select2-country-results')
    .locator("li",{
        hasText:"India"
    }).click();

    await page.pause();
    await page.close();
})
