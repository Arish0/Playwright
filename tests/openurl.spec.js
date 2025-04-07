const{test,expect} =require('@playwright/test');


test('Amazon Title Test', async ({ page }) => {
  await page.goto('https://www.amazon.com/', { waitUntil: 'load' }); // or 'load'
  await expect(page).toHaveTitle('Amazon.com. Spend less. Smile more.');

  const pageTitle = await page.title();
  console.log('Page title is:', pageTitle);

  const pageURL = page.url();
  console.log('Page URL is:', pageURL);
});
