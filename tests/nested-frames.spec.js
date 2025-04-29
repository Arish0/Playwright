const {test,expect} = require('@playwright/test')
test('nested frames', async ({page})=>{
    await page.goto('https://ui.vision/demo/webtest/frames/')
    const frame3 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'})
    // await frame3.locator("//input[@name='mytext3']").fill('harish')
    const childframes = await frame3.childFrames()
    await childframes[0].locator('//*[@id="mG61Hd"]/div[2]/div[1]/div[2]/div[1]/div/div/div[2]/div[1]/div/span/div/div[1]/label/div/div[1]').click();
    await page.waitForTimeout(5000);

})