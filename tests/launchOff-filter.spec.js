const {test,expect} = require('@playwright/test')
test('handling dropdowns',async ({ page })=>{
    await page.goto('https://devuser.launchoff.fun/home')
    await page.locator("//button[contains(text(),'Ready to launch 🚀')]").click()
    await page.locator("//button[contains(text(),'✕')]").click()

    await page.locator("//*[name()='path' and contains(@d,'M7 10L12 1')]").click()
    await page.click("//a[normalize-space()='Currently Live']")
    await page.waitForTimeout(3000)

    await page.click("//*[name()='path' and contains(@d,'M7 10L12 1')]")
    await page.click("//a[normalize-space()='Currently Live']")
    await page.waitForTimeout(3000)

    await page.click("//*[name()='path' and contains(@d,'M7 10L12 1')]")
    await page.click("//a[normalize-space()='Last Reply']")
    await page.waitForTimeout(3000)

    await page.click("//*[name()='path' and contains(@d,'M7 10L12 1')]")
    await page.click("//a[normalize-space()='Market Cap']")
    await page.waitForTimeout(3000)



   
        
        
       
    

    await page.waitForTimeout(5000)
})
