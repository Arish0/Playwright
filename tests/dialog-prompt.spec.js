const {test,expect} = require('@playwright/test')
test('with propmt confirmation', async ({ page })=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    page.on('dialog',async dialog=>{
        expect(dialog.type()).toContain('prompt')
        expect(dialog.message()).toContain('Please enter your name:')
        expect(dialog.defaultValue()).toContain('Harry Potter')
        await dialog.accept('john')
    })
    await page.locator('(//button[normalize-space()="Prompt Alert"])[1]').click();
    await expect(page.locator('//p[@id="demo"]')).toHaveText('Hello john! How are you today?')
    await page.waitForTimeout(5000)

})