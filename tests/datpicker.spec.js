// const {test,expect} = require('@playwright/test')
// test('Dtae picker',async ({page})=>{
//     await page.goto('https://testautomationpractice.blogspot.com')
//     await page.locator('#datepicker').fill('23/12/2002');

// //datepicker method 2 
// const year = "2016"
// const month = "december"
// const day = "23"

// const choosedyear=await page.locator('.ui-datepicker-year').textContent();
// const choosedmonth=await page.locator('.ui-datepicker-month').textContent();

// if(choosedyear>year && choosedmonth>month)
// {
//     await page.locator("(//a[@title='Next'])[1]").click();
    
// }
// else if(choosedyear>year && choosedmonth>month){
//     await page.locator("//a[@title='Prev']").click();
// }
// else{
//     break;
// }



//     await page.waitForTimeout(3000);
// })

const { test, expect } = require('@playwright/test');

test('Date picker', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com');

  // Open the date picker
  await page.locator('#datepicker').click();

  // Target date
  const year = "2016";
  const month = "December"; // Capitalization matters
  const day = "23";

  // Loop until desired month and year are displayed
  while (true) {
    const displayedYear = await page.locator('.ui-datepicker-year').textContent();
    const displayedMonth = await page.locator('.ui-datepicker-month').textContent();

    if (displayedYear === year && displayedMonth === month) {
      break;
    }

    // Convert to numbers to allow date comparison
    const displayedDate = new Date(`${displayedMonth} 1, ${displayedYear}`);
    const targetDate = new Date(`${month} 1, ${year}`);

    if (displayedDate < targetDate) {
      await page.locator("(//a[@title='Next'])[1]").click();
    } else {
      await page.locator("(//a[@title='Prev'])[1]").click();
    }

    await page.waitForTimeout(30); // small delay for UI update
  }

  // Click the desired day
  await page.locator(`//a[text()='${day}']`).click();

  await page.waitForTimeout(10000); // just to see the result before test ends
});
