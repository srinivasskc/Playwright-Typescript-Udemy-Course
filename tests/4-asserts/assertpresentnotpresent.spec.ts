import {test,expect} from '@playwright/test';

test("Assert if the element is present or not", async({page})=> {
    await page.goto('https://the-internet.herokuapp.com/add_remove_elements/');
    
    //First we will check delete button is not visible.
    await expect(page.locator('.added-manually')).not.toHaveCount(1);
    
    //Click on Add Element Button
    await page.locator('button[onclick="addElement()"]').click();
    await page.locator('button[onclick="addElement()"]').click();
    

    //Check now delete button is visible
    await expect(page.locator('.added-manually')).toHaveCount(2);
    
    await page.close();

})