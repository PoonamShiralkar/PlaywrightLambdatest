import {expect, test} from "@playwright/test";

test("Basic Interaction Test", async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");

    const message = page.locator("input#user-message");
    console.log(await message.getAttribute("placeholder"));

    expect(message).toHaveAttribute("placeholder", "Please enter your Message");

    await message.scrollIntoViewIfNeeded(); // to scroll the element into view if it is not visible

    console.log('Before : ' + await message.inputValue());

    await message.fill("Welcome to Poonam's GitHub Repository");

    console.log('After : ' +  await message.inputValue());
    
})


test("Basic Interaction Test", async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");

    const sum1 = page.locator("#sum1");
    const sum2 = page.locator("#sum2");

    const GetValue = page.locator("#showInput");

    let num1 = 10;
    let num2 = 20;

    await sum1.fill("" + num1);
    await sum2.fill("" + num2);

    console.log(await sum1.textContent());      
    console.log(await sum2.textContent());  


    await GetValue.click();

    const result = page.locator("#addmessage");
    console.log(await result.textContent());

    expect(result).toHaveText("" + (num1 + num2));        

})



test("Basic Interaction Test", async({page})=>{
    await page.goto("https://www.qa-practice.com/elements/checkbox/single_checkbox");

    const singleCheckBox = page.locator("#id_checkbox_0");
         
    expect(singleCheckBox).not.toBeChecked();

    await singleCheckBox.check();
    
    expect(singleCheckBox).toBeChecked();

})