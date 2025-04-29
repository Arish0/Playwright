const{test,expect}=require('@playwright/test')
test('Handling frames/iframes',async ({ page})=>{
    //finding the length of t6he frames(no of frames)
    await page.goto('https://ui.vision/demo/webtest/frames/')
    const altframes =await page.frames()
    console.log("Number of frames",altframes.length)


    // //approach1
    // const frame1 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'})
    // await frame1.fill('[name="mytext1"]','hello')
    // await page.waitForTimeout(5000);


    //approach2 
    const inputfield = await page.frameLocator('frame[src="frame_1.html"]').locator('[name="mytext1"]')
    inputfield.fill('harish')
    await page.waitForTimeout(4000)
})


