const {test,expect} = require('@playwright/test')
test('alert handling',async ({ page })=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    page.on('dialog',async dialog=>{
        expect(dialog.type()).toContain('alert')
        expect(dialog.message()).toContain('I am an alert box!')
        await dialog.accept()
    })
    
    await page.locator('(//button[normalize-space()="Simple Alert"])[1]').click();
    await page.waitForTimeout(5000);
    
})