const{test,expect} = require('@playwright/test')
test('handling-auto sugestion', async ({ page })=>{
    await page.goto('https://www.redbus.in/')
    // await page.locator('#src').click();
    await page.locator('#src').fill('Ooty');
    await page.waitForSelector("//li[contains(@class,'sc-iwsKbI jTMXri')]/div/text[1]")
    const option1 = await page.$$("//li[contains(@class,'sc-iwsKbI jTMXri')]/div/text[1]")
    for(const options1 of option1){

        const value = await options1.textContent();
        console.log(value);
        if(value.includes('Yellanahalli')){
            await options1.click();
            break
        }
    }
    await page.waitForTimeout(2000);
  
})