import {test,expect} from '@playwright/test'
test('screenshot',async ({ page })=>{
    await page.goto('https://www.redbus.com')
    await page.screenshot({path: 'tests/screenshots/'+Date.now()+'HomePage.png'})
    
})

test('full screenshot',async ({ page })=>{
    await page.goto('https://www.redbus.com/')
    await page.screenshot({ path:'tests/fullscreenshot/'+Date.now()+'FullPage.png',fullPage:true })
})

test('particular element',async ({ page })=>{
    await page.goto('https://redbus.com/')
    await page.locator('//img[@class="hero-image"]').screenshot({ path:'tests/particular-element-ss/'+Date.now()+'Particular-part.png'})
})