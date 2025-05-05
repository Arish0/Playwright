const {test,expect} = require('@playwright/test')
test('mouseclick',async ({ page })=>{
    await page.goto('https://test.io/#form')
    const button =await page.locator("//body/div[@id='wrapper']/div[@class='header-container iparsys parsys']/div[@class='header section']/header[@class='test-io header-ui header--animated']/div[@class='header__bottom']/div[@class='header__content bottom']/nav[@aria-label='Main navigation']/ul[@class='top-navigation__row']/li[1]/span[1]")
    await button.click({button:'right'});
    await page.waitForTimeout(5000);
})