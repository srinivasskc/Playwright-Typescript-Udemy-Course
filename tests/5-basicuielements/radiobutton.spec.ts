import {test, expect} from '@playwright/test'

test('Handling Radio Buttons',async({page})=>{
    await page.goto('https://demo.automationtesting.in/Register.html');

    const maleRadioButton = page.locator('input[value="Male"]');
    const femaleRadioButton = page.locator('input[value="FeMale"]');

    //way 1 assertion

    await expect(maleRadioButton).not.toBeChecked();
    await expect(femaleRadioButton).not.toBeChecked();

    //way 2 assertion
    expect(await maleRadioButton.isChecked()).toBeFalsy();
    expect(await femaleRadioButton.isChecked()).toBeFalsy();

    await maleRadioButton.check();
    await expect(maleRadioButton).toBeChecked();

    await femaleRadioButton.check();
    expect(await femaleRadioButton.isChecked()).toBeTruthy();


    await page.close();
})