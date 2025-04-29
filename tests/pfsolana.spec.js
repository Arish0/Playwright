 const {test,expect} = require('@playwright/test');

test('Pfclone(Solana)', async ({page})=>{
   await page.goto('https://pfsolana-frontenddev.blockchainx.tech/home');
   await page.click('.margin.font-semibold');
   await page.click('body > app-root:nth-child(1) > app-layout:nth-child(2) > app-landing:nth-child(4) > app-users-list:nth-child(2) > section:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > figure:nth-child(2) > img:nth-child(2)');
   await page.fill('#token','0.001');
   
   await page.waitForTimeout(5000);
});


