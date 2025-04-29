const {test,expect} = require('@playwright/test')
test('Confirmation dialog', async ({ page })=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('confirm')
        expect(dialog.message()).toContain('Press a button!')
        await dialog.accept();
        // await dialog.dismiss();
    })
    await page.locator('(//button[normalize-space()="Confirmation Alert"])[1]').click(); 
    await expect(page.locator("//p[@id='demo']")).toHaveText('You pressed OK!')
    await page.waitForTimeout(5000)

})

