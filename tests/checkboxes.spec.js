const { test,expect } = require('@playwright/test')
test('checkboxes', async ({ page })=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator("(//input[@id='monday'])[1]").click();
    await page.waitForTimeout(2000);
    await expect(await page.locator("(//input[@id='monday' and @type='checkbox'])")).toBeChecked();
    await expect(await page.locator("(//input[@id='monday' and @type='checkbox'])").isChecked()).toBeTruthy();

    const checkboxloc = [
        "//input[@id='sunday' and @type='checkbox']",
        "//input[@id='saturday' and @type='checkbox']",
        "//input[@id='thursday' and @type='checkbox']"
    ]

    for(const checkboxelement of checkboxloc ){
        await page.locator(checkboxelement).click()
       
    }
    await page.waitForTimeout(3000);

    for(const checkboxelement1 of checkboxloc ){
        if(await page.locator(checkboxelement1).isChecked()){
            await page.locator("(//input[@id='monday' and @type='checkbox'])").uncheck();
            await page.locator(checkboxelement1).uncheck();
        }
    }   
    


    await page.waitForTimeout(5000);

})
