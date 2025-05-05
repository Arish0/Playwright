const {test,expect} =require('@playwright/test')
test('demo testing',async ({ page })=>{
    await page.goto('https://www.google.com')
    const table = await page.locator('//table["@productTable"]')
    const column = table.locator('thread tr')
    const row = table.locator('tbody tr')
    await selectplace(row,page,'Smartphone');
    await selectplace(row,page,'Laptop')

    async function selectplace(row,page,name){
        const matchedrow=row.filter({
            has:page.locator('td'),
            hasText:name
        })
        await matchedrow.locator('input')
       
    }
})

function market(row,page,name){
    const order = orders.filter({
        has: orders.locator('tr'
            
        )
    })
}

async function market(rows,page,name){
    const order = row.filter({
        has: page.rows('td'),
        hasText: 'Laptop'
    })
    await market.locator('input').check()
}



for(let i=0; i< rows.count(); i++)
{
    const row = rows.nth(i);
    const tds =row.locator('td')
    for(let j=0; j< column.count();j++)
    {
        console.log(await tds,nth(j).tesxtContent());
    }
}


for(let i=0;i< await rows.count();i++)
{
    const rows =rows.nth(i);
    const capture = rows.locator('td')
    for(let j=0;j<await columns.count -1; j++){
        console.log(await capture,nth(j).textContent())
    }
}

for(i=0;i<await rows.count();i++){
    const first = rows.nth(i);
    const second=first.locator('td')
    for(j=0;j<column.count();j++){
        console.log(await second.nth(j).textContent())
    }
}