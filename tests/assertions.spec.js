const { test, expect } = require('@playwright/test');

test('assertions', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await expect(page).toHaveTitle('OrangeHRM');

 
  const username = page.locator('input[name="username"]');

  const password = page.locator('input[name="password"]');

  await expect(username).toBeVisible();
  await expect(username).toBeEnabled();
  await expect(password).toBeVisible();
  await expect(password).toBeEnabled();

  const loginButton = page.locator('button[type="submit"]');

  await expect(loginButton).toBeVisible();
  await expect(loginButton).toBeEnabled();
  
  await expect(username).toHaveAttribute('placeholder', 'Username');
  
  await expect(password).toHaveAttribute('placeholder', 'Password');
  await username.fill('Admin');
  await password.fill('admin123');
  await loginButton.click();
 
});
