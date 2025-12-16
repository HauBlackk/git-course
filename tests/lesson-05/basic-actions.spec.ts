import { test } from '@playwright/test';

test('Basic action', async ({ page }) => {
    await test.step("Step 1", async () => {
        await page.goto("https://material.playwrightvn.com/");
    });

    await test.step("click", async () => {
        await page.locator("//a[text()='Bài học 1: Register Page (có đủ các element)']").click();
    });

    // await test.step("input", async () => {
    //     await page.locator("//input[@id='username']").fill("Hau Vo");
    //     await page.locator("//input[@id='email']").pressSequentially("trunghau@gmail.com", { delay: 1_000 })
    // });

    await test.step("check button/radio", async () => {
        let isCheckedMale = await page.locator("//input[@id='male']").isChecked();
        console.log(isCheckedMale);

        await page.locator("//input[@id='male']").check();
        isCheckedMale = await page.locator("//input[@id='male']").isChecked();
        console.log(isCheckedMale);
    });

    await test.step("select option", async ()=>{
        await page.locator("//select[@id='country']").selectOption("United Kingdom");

        await page.locator("//input[@type='file']").setInputFiles("tests\\data-test\\data-demo.txt");
    })
})

