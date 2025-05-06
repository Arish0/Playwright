const {test,expect} =require("@playwright/test")
test('mouse-drag-drop',async ({ page })=>{
    await page.goto('http://dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
    const rome =await page.locator('//div[@id="box7"]')
    const rome2 =await page.locator('//div[@id="box103"]')
    await rome.dragTo(rome2)
    await page.waitForTimeout(5000)
})