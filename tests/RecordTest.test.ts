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

    //recoreded code not make seperate context and broswer object like usual coing does
    await page.goto('https://ecommerce-playground.lambdatest.io/');

    // need to add explicitly as recorder not record some action like hover, click, fill etc. on the same element
    await page.hover("//*[@id='widget-navbar-217834']/ul/li[6]/a/div/span");

    await page.getByRole('link', { name: 'Login' }).click();
    await page.getByRole('textbox', { name: 'E-Mail Address' }).click();

    // whatever action you perform on the same element, it will record and generate the code for you
    await page.getByRole('textbox', { name: 'E-Mail Address' }).fill('shiralkar.poonam@gmail.com');
    await page.getByRole('textbox', { name: 'E-Mail Address' }).press('Tab');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('');
    await page.getByRole('button', { name: 'Login' }).click();

    // to verify that user is logged in successfully
    await page.getByRole('link', { name: ' Edit your account' }).click();
    await page.getByRole('textbox', { name: 'First Name *' }).click();
    await page.getByRole('textbox', { name: 'First Name *' }).fill('Poonam s');
    await page.getByRole('button', { name: 'Continue' }).click();

    // need to add explicitly as recorder not record some action like hover, click, fill etc. on the same element
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