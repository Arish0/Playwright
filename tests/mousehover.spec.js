const {test,expect} = require('@playwright/test')
test('Mouse hover action', async ({ page })=>{
    await page.goto('https://test.io/company/become-a-tester')
    const m1 = await page.locator("//body/div[@id='wrapper']/div[@class='header-container iparsys parsys']/div[@class='iparys_inherited']/div[@class='header-container iparsys parsys']/div[@class='header section']/header[@class='test-io header-ui']/div[@class='header__bottom']/div[@class='header__content bottom']/nav[@aria-label='Main navigation']/ul[@class='top-navigation__row']/li[1]/span[1]")
    const m2 = await page.locator("//body/div[@id='wrapper']/div[@class='header-container iparsys parsys']/div[@class='iparys_inherited']/div[@class='header-container iparsys parsys']/div[@class='header section']/header[@class='test-io header-ui']/div[@class='header__bottom']/div[@class='header__content bottom']/nav[@aria-label='Main navigation']/ul[@class='top-navigation__row']/li[5]/span[1]")
    await m1.hover()
    await page.waitForTimeout(2000);
    await m2.hover()
    await page.waitForTimeout(5000);
})