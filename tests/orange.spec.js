const {test,expect} = require('@playwright/test')
test('Orange',async ({ page }) => {
   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

   await page.getByPlaceholder('Username').fill("Admin")
   await page.getByPlaceholder('Password').fill("admin123")
   await page.getByRole('button', {type:"submit"}).click()
   const logotext =await page.locator('//p[@class="oxd-userdropdown-name"]').textContent()
   await expect(page.getByText(logotext)).toBeVisible()


  
})

// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page1.goto('https://www.flipkart.com/');
//   await page1.getByRole('link', { name: 'Image Image Fastrack' }).click();
//   const page2Promise = page1.waitForEvent('popup');
//   await page1.locator('div:nth-child(4) > ._75nlfW > div:nth-child(4) > ._1sdMkc > .rPDeLR').click();
//   const page2 = await page2Promise;
//   await page2.getByRole('button', { name: 'Buy Now' }).click();
//   await page2.getByRole('textbox').click();
//   await page2.getByRole('textbox').fill('9344739419');
//   await page2.getByRole('button', { name: 'CONTINUE' }).click();
// });

