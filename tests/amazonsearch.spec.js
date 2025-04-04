const { test, expect } = require('@playwright/test');

test('Search iPhone 16 on Flipkart', async ({ page }) => {
    // Wait for 10 seconds before navigating (not recommended)
    

    // Open Flipkart
    await page.goto('https://www.flipkart.com/');
    await new Promise(resolve => setTimeout(resolve, 10000));
});
