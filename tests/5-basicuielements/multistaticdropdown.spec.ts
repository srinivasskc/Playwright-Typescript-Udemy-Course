import {test,expect} from '@playwright/test'

test('Handling Multi Static Dropdownlist',async({page})=> {
    await page.goto('https://www.lambdatest.com/selenium-playground/select-dropdown-demo');

    //Value
    await page.selectOption('#multi-select',[
        {value:'California'},
        {label:'New Jersey'},
        {index: 1}
    ]);

    await page.pause();

    await page.close();
})