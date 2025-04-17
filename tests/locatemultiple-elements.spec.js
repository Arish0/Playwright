
// for our company website
// const {test,expect} = require('@playwright/test');

// test('locatemulelements', async ({ page })=>{
//     await page.goto('https://devuser.launchoff.fun/home/token/DRcNCUmBxayor35Nuj34HAxCCWxB566J44CpECSLNCH',{waituntil : 'load'});
//     // await page.click("//button[contains(text(),'Ready to launch 🚀')]");
//     // await page.click("//button[contains(text(),'✕')]",{waituntil : 'load'})
//     const links = await page.$$('a');
    
//     for (const link of links){
//         const gotext = await link.textContent();
//         console.log(gotext);
//     }
//     });

    const { test,expect } = require('@playwright/test');
    test('testflipkart', async ({ page }) =>{
        await page.goto('https://www.flipkart.com/', {waituntil : 'load'});
        const hari = await page.$$('a');
        
        for (const harish of hari){
            const goodtry = await harish.textContent();
            console.log(goodtry);
        }
    });

  
 
