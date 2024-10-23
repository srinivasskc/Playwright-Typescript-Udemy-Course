import {test, expect} from '@playwright/test'

test('Handling Checkboxes',async({page})=>{
    await page.goto('https://demo.automationtesting.in/Register.html');

    const cricketCheckbox = page.locator('#checkbox1');
    const moviesCheckbox  = page.locator('#checkbox2');
    const hockeyCheckbox  = page.locator('#checkbox3');

    //Way 1 Assertion
    await expect(cricketCheckbox).not.toBeChecked();
    await expect(moviesCheckbox).not.toBeChecked();
    await expect(hockeyCheckbox).not.toBeChecked();
    

    //Way 2 Assertion
    expect(await cricketCheckbox.isChecked()).toBeFalsy();
    expect(await moviesCheckbox.isChecked()).toBeFalsy();
    expect(await hockeyCheckbox.isChecked()).toBeFalsy();
    
    //Selecting all checkboxes
    await cricketCheckbox.check();
    await moviesCheckbox.check();
    await hockeyCheckbox.check();
    
    //Assertion
    await expect(cricketCheckbox).toBeChecked();
    await expect(moviesCheckbox).toBeChecked();
    await expect(hockeyCheckbox).toBeChecked();
    
    expect(await cricketCheckbox.isChecked()).toBeTruthy();
    expect(await moviesCheckbox.isChecked()).toBeTruthy();
    expect(await hockeyCheckbox.isChecked()).toBeTruthy();
    

    await page.close();

})