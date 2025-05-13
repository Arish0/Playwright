const{test,expect} = require('@playwright/test')
test('capturing video',async ({ page })=>{
    await page.goto('https://www.youtube.com/')
    await page.locator('//input[@placeholder="Search"]').click()
    await page.locator('//input[@placeholder="Search"]').fill("Blockchain")
    await page.locator("//button[@title='Search']//yt-icon//div").click()
    await page.locator("(//img[@class='yt-core-image yt-core-image--fill-parent-height yt-core-image--fill-parent-width yt-core-image--content-mode-scale-aspect-fill yt-core-image--loaded'])[1]").click()
    await page.waitForTimeout(3000)
})
