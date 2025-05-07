const {test,expect} = require('@playwright/test')
test('handling token detail page',async ({ page })=>{
    await page.goto('https://devuser.launchoff.fun/home')
    await page.locator("//button[contains(text(),'Ready to launch 🚀')]").click()
    await page.locator("//button[contains(text(),'✕')]").click()
    await page.locator("//div[@class='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-5 md:gap-x-6 gap-y-6 md:gap-y-7']//div[1]//div[1]//div[1]//figure[1]//img[2]").click()
    await page.locator("//input[@id='token']").click()
    await page.locator("//input[@id='token']").fill('12345')

   await page.click("//div[@class='font-semibold text-xs leading-none cursor-pointer w-24 sm:w-28 pb-2 pt-2 px-4 text-center flex justify-center items-center transition-colors duration-300 text-gray-500']")
   const table = await page.locator("//table[@class='table-auto w-full min-w-max']")
   const columns = await page.locator("thead tr")
   console.log("no of columns",await columns.count())
   const rows = await page.locator("tbody")
   console.log("no of rows",await rows.count())


   
   await page.waitForTimeout(5000);
});


