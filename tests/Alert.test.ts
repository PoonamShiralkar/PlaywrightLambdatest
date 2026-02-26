import    { test, expect } from "@playwright/test";

test("alert demo", async ({ page }) => {
    await page.goto("https://www.qa-practice.com/elements/alert/alert");


   page.on("dialog", async (alert) => {

            const text = alert.message(); // to get the default value of the alert

            console.log(text);
            await alert.accept(); // to accept the alert
            //await alert.dismiss(); // to dismiss the alert
            //await alert.accept("This is a custom message"); // to accept the alert with a custom message  
        });
        await page.locator('.a.a-button').click();
    
        expect(page.locator("#result-text")).toContainText("Cancel");
   });