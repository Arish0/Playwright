const { test,expect } = require('@playwright/test')
test('input box', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    await expect(await page.locator("(//input[@id='name'])[1]")).toBeVisible();
    await expect(await page.locator("(//input[@id='name'])[1]")).toBeEmpty();
    await expect(await page.locator("(//input[@id='name'])[1]") ).toBeEnabled();
    await page.locator("(//input[@id='name'])[1]").fill("Hari");
    await page.waitForTimeout(5000);

})