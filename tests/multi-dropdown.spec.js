const {test, expect} = require('@playwright/test')
test('mutiple option selecting in dropdown', async ({ page })=>{
    await page.goto('https://testautomationpractice.blogspot.com')
    await page.selectOption('#colors',['Red','Blue','Yellow']);

    await page.waitForTimeout(2000);
    
})