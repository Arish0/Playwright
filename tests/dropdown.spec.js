const {test,expect} = require('@playwright/test')
test('hadling Dropdown', async ({ page })=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
   // await page.locator("#country").selectOption({label:'India'});//accessing with label
   // await page.locator("#country").selectOption('India');//accessing using visible name
//    await page.locator('#country').selectOption({value:'uk'});
    //   await page.locator('#country').selectOption({index: 1});
      await page.selectOption("#country",'india');
     await page.waitForTimeout(5000);

//Assertions
    //   const options = await page.locator("#country option")
    //   await expect(options).toHaveCount(10);


    //   const option =await page.$$('#country option')
    //   console.log("Number of options", option.length)

    //to prnit and check the values were present in the dropdown
    // const text1 =await page.locator('#country').textContent();
    // console.log(text1);
    // await expect(text1.includes('xyz')).toBeFalsy();

  const capvar = await page.$$('#country option')
  let status = false;

  for(const varcap of capvar){
    let value = await varcap.textContent();
    if(value.includes('Frances')){
        status = true;
        break;
    }
  }
  if(status==true){
    expect (status).toBeTruthy();
  }
  else{
    expect (status).toBeFalsy();
  }
    
  
  
 }) 