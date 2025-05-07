const {test,expect} = require('@playwright/test')
test('handling token detail page',async ({ page })=>{
    await page.goto('https://devuser.launchoff.fun/home')
    await page.locator("//button[contains(text(),'Ready to launch 🚀')]").click()
    await page.locator("//button[contains(text(),'✕')]").click()


    const mc = await page.$$("//p[contains(@class,'text-black text-xxs-10 font-medium leading-none')]")


    const pages = await page.locator("//ul[contains(@class,'pagination')] /li ")
    
    for(let p=1;p<await pages.count() - 1;p++){
        if(p>0){
        await pages.nth(p).click()
        await page.waitForTimeout(3000)
        }
         for(let tokens of mc){
        const value = await tokens.textContent()
    
        console.log(value)
         }
        

    }



 await page.waitForTimeout(5000)

})

