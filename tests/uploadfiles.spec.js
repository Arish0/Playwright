const {test,expect} =require('@playwright/test')
test('upload files',async ({ page })=>{
     await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")
     await page.locator("#filesToUpload")
          .setInputFiles(['tests/uploadFiles/🌍 GreenEarth Token.pdf',
            'tests/uploadFiles/AI Phantom Seal.pdf'])
    //expect(await page.locator('#filesToUpload li:nth-child(1)')).toHaveText('🌍 GreenEarth Token')
    await page.waitForTimeout(5000)

    await page.locator('#filesToUpload').setInputFiles([])
    expect(await page.locator(' #fileList li:nth-child(1)')).toHaveText('No Files Selected')
    await page.waitForTimeout(3000)
})