import { test, expect } from '@playwright/test';

//before all test hook -- only once executed before all the tests are executed
test.beforeAll(async () => {
    console.log("before all");
    }       
);

//before each test hook -- executed before each test
test.beforeEach(async () => {
    console.log("before each");     
});

//Recored test case -- it will record the test case and generate the code for you (npx playwright codegen <url>)
test('test', async ({ page }) => {
  await page.goto('https://ecommerce-playground.lambdatest.io/');
 await page.hover("//*[@id='widget-navbar-217834']/ul/li[6]/a/div/span");
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'E-Mail Address' }).click();
  await page.getByRole('textbox', { name: 'E-Mail Address' }).fill('shiralkar.poonam@gmail.com');
  await page.getByRole('textbox', { name: 'E-Mail Address' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('pass123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: ' Edit your account' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).fill('Poonam s');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.hover("//*[@id='widget-navbar-217834']/ul/li[6]/a/div/span");
  await page.getByRole('link', { name: 'Logout', exact: true }).click();
});

//After each test hook -- executed after each test
test.afterEach(async () => {
    console.log("after each");     
});

//After all test hook -- only once executed after all the tests are executed
test.afterAll(async () => {
    console.log("after all");
});