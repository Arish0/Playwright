const { test,expect } = require('@playwright/test')
test ("Valid login", async ({ page }) => {

    await page.goto("https://www.google.com/ ");
});