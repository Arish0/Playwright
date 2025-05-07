const {test,expect} = require('@playwright/test')
test('handling token detail page',async ({ page })=>{
    await page.goto('https://devuser.launchoff.fun/home')
    await page.locator("//button[contains(text(),'Ready to launch 🚀')]").click()
    await page.locator("//button[contains(text(),'✕')]").click()
    await page.locator("//div[@class='col-span-12 md:col-span-6 lg:col-span-8 text-center md:text-start']//button[normalize-space()='Start a New Coin']").click()
    await page.waitForTimeout(3000)
})