const {test,expect} = require('@playwright/test')
test('Orange',async ({ page }) => {
   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

   await page.getByPlaceholder('Username').fill("Admin")
   await page.getByPlaceholder('Password').fill("admin123")
   await page.getByRole('button', {type:"submit"}).click()
   const logotext =await page.locator('//p[@class="oxd-userdropdown-name"]').textContent()
   await expect(page.getByText(logotext)).toBeVisible()


  
})