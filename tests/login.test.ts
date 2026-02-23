import{chromium, test} from "@playwright/test"; 

test("login demo", async()=>{

     const browser = await chromium.launch({
         headless : false // to see the browser action
        });
    const context = await browser.newContext();
    const page = await context.newPage();

    // to perform login action 
    await page.goto("https://ecommerce-playground.lambdatest.io/");
    await page.hover("//*[@id='widget-navbar-217834']/ul/li[6]/a/div/span");

    await page.click("text=Login");
    await page.fill("input[name='email']","shiralkar.poonam@gmail.com");
    await page.fill("input[type='password']","")
    await page.click("input[value='Login']");

    // to verify that user is logged in successfully
    await page.waitForTimeout(3000);
   
    const context2 = await browser.newContext();
    const page1 = await context2.newPage();
    await page1.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/account");
   
    // to verify that user is logged in successfully
    await page1.waitForTimeout(3000);
})