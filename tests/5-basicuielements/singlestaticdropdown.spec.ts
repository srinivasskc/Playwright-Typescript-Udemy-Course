import {test,expect} from '@playwright/test'

test('Handling Single Static Dropdown',async({page})=> {
    await page.goto('https://demo.automationtesting.in/Register.html');
    
    await page.selectOption('#Skills',{
        value: "Certifications"
    });


    await page.pause();;

await page.selectOption('#Skills',{
    label: "Android"
});


    await page.pause();

  await page.selectOption('#Skills',{
    index: 1
});


    await page.pause();

    await page.close();


})