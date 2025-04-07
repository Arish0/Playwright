const {test,expect} = require('@playwright/test')

test('login and password',async ({page})=>{
    await page.goto('https://www.flipkart.in');

    

    await page.click("//span[normalize-space()='Login']");
    await page.fill("(//input[@class='r4vIwl BV+Dqf'])[1]",'9344739419');
   
});

// const { test, expect } = require('@playwright/test');

// test('login and password', async ({ page }) => {
//   await page.goto('https://www.flipkart.com', { waitUntil: 'domcontentloaded' });

//   // Wait for the login modal (or use a better selector)
//   await page.waitForTimeout(3000); // Wait for modal to appear (or better: use waitForSelector)

//   // Optionally close the login popup if it auto-opens
//   const closeBtn = page.locator("button._2KpZ6l._2doB4z");
//   if (await closeBtn.isVisible()) {
//     await closeBtn.click();
//   }

//   // Click login manually (optional, since Flipkart auto-opens it)
//   const loginButton = page.locator("//span[text()='Login']");
//   if (await loginButton.isVisible()) {
//     await loginButton.click();
//   }

//   // Print title for confirmation
//   console.log(await page.title());
// });
