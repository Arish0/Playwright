const {test,expect} = require('@playwright/test')
test('handling token detail page',async ({ page })=>{
    await page.goto('https://devuser.launchoff.fun/home')
    await page.locator("//button[contains(text(),'Ready to launch 🚀')]").click()
    await page.locator("//button[contains(text(),'✕')]").click()
    await page.locator("//div[@class='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-5 md:gap-x-6 gap-y-6 md:gap-y-7']//div[1]//div[1]//div[1]//figure[1]//img[2]").click()
    await page.locator("//button[normalize-space()='Post a reply']").click()
    await page.waitForTimeout(5000)
})