const {test,expect} = require('@playwright/test')
test('doubleclick',async ({page})=>{
    await page.goto('http://www.testautomationpractice.blogspot.com/')
    await page.locator()
    await page.waitForTimeout(5000)
})