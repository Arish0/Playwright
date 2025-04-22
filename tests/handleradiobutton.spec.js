const {test,expect} = require('@playwright/test')
test('handling radio buttion', async ({ page }) =>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator("(//input[@id='male'])[1]").click();
    await expect(await page.locator("(//input[@id='male'])[1]")).toBeChecked();
    await expect(await page.locator("(//input[@id='male'])[1]").isChecked()).toBeTruthy();
    await expect(await page.locator("(//input[@id='female'])[1]").isChecked()).toBeFalsy();
    await page.waitForTimeout(5000);
})