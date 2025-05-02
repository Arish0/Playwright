const {test,expect} = require('@playwright/test')
test('web table', async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com')
    await page.waitForTimeout(3000)
    const table = await page.locator('table[id="productTable"]')
    const columns = await table.locator('thead tr th')
    console.log('No of columns',await columns.count()) 
    const rows = await table.locator('tbody tr')
    console.log('No of rows', await rows.count());
    expect(await columns.count()).toBe(4);
    expect(await rows.count()).toBe(5);
//selecting a single product
    // const matchedRow = row.filter({
    //     has:page.locator('td'),
    //     hasText: 'Smartwatch'
    // })
    // console.log(matchedRow)
    // await matchedRow.locator('input').check();

//selecting multiple product
//     await selectProduct(row,page,'Smartwatch')
//     await selectProduct(row,page,'Laptop')
//     await selectProduct(row,page,'Wireless Earbuds')

//     async function selectProduct(row,page,name){
//         const matchedRow =row.filter({
//             has: page.locator('td'),
//             hasText: name
//         })
//         await matchedRow.locator('input').check();
//     }


//printing every data's from the table
// for(let i=0; i<await rows.count();i++)
//     {
//     const row = rows.nth(i);
//     const tds = row.locator('td')
//     for(let j=0; j< await columns.count();j++){
//         console.log(await tds.nth(j).textContent());
//     }
    
// }



const pages=await page.locator('.pagination li a')
console.log('Number of pages in the table:',await pages.count())

for(let p=0;p<await pages.count();p++){
    if(p>0)
    {
    await pages.nth(p).click()
    }

    for(let i=0;i<await rows.count();i++){
      const first = rows.nth(i);
      const second = first.locator('td')
      for(let j=0;j<await columns.count()-1;j++){
        console.log(await second.nth(j).textContent())
      }
}
await page.waitForTimeout(3000)
}
await page.waitForTimeout(5000)
})